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
          model: "gpt-4o",
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: "Create a JavaScript function to fetch data on the 10 year treasury from FRED.  Only output the code.  Don't include any preface or explaination of the code.  Also, don't include any additional formatting (such as labeling it Javascript or adding ```.  I'll do all processing on my side",
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
