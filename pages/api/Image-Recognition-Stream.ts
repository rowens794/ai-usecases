import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  const url = `https://api.openai.com/v1/chat/completions`;
  const stream = new ReadableStream({
    async start(controller) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4-vision-preview",
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "image_url",
                  image_url: {
                    url: "https://res.cloudinary.com/dfebwzrhb/image/upload/v1712457639/wvimb/Yield-Curve.png",
                  },
                },
                {
                  type: "text",
                  text: "What’s in this image? Create a super short explanation that will help a viewer to understand the message that's being conveyed and why it's important. Note that the blue line is the most recent data, March 2024, the green line is Jan 2023, and the grey line is the oldest data, Jan 2022. Use at most 75 words in your explaination.",
                },
              ],
            },
            {
              role: "assistant",
              content: [
                {
                  type: "text",
                  text: "This image shows the U.S. Treasury yield curve over time. The blue line (March 2024) indicates higher yields across all maturities compared to January 2023 (green line) and January 2022 (grey line), reflecting rising interest rates. The 15-year yield range in grey provides context for recent changes. Understanding the yield curve is vital for assessing economic conditions, interest rate expectations, and making investment decisions.",
                },
              ],
            },
          ],
          stream: true,
        }),
      });

      //@ts-ignore
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer: string = "";
      //@ts-ignore
      async function handleStream({
        done,
        value,
      }: {
        done: boolean;
        value?: Uint8Array;
      }) {
        if (done) {
          if (buffer) {
            processBuffer(buffer); // Process any remaining data in buffer
          }
          controller.close();
          return;
        }

        // Decode the bytes to string and add to buffer
        buffer += decoder.decode(value, { stream: true });

        // Find last occurrence of newline, and slice up to it
        let lastNewlineIndex = buffer.lastIndexOf("\n");
        if (lastNewlineIndex !== -1) {
          let completeData = buffer.slice(0, lastNewlineIndex);
          buffer = buffer.slice(lastNewlineIndex + 1);
          completeData.split("\n").forEach(processBuffer);
        }

        return reader.read().then(handleStream);
      }

      function processBuffer(chunk: string) {
        try {
          chunk = chunk.trim();
          chunk = chunk.replace("data: ", "");
          let jsonData = JSON.parse(chunk);
          if (jsonData.choices) {
            jsonData.choices.forEach((choice: any) => {
              if (choice.delta && choice.delta.content) {
                controller.enqueue(
                  `data: ${JSON.stringify(choice.delta.content)}\n\n`
                );
              }
            });
          }
        } catch (error) {
          console.error("Failed to parse JSON:", error);
        }
      }

      return reader.read().then(handleStream);
    },
  });

  const responseHeaders = new Headers({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  return new NextResponse(stream, { headers: responseHeaders });
}
