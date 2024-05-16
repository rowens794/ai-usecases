import React from "react";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";

import CostToRun from "../Cost-To-Run";
type Props = {};

type Data = {
  data: {
    sentence: string;
    startTime: string;
    endTime: string;
    speaker_name: string;
    speaker_id: number;
  }[];
};

export default function Index({}: Props) {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/Task-Planning");
      const data = await response.json();
      setMessages(data);
    };

    if (!messages) fetchData();
  });

  return (
    <div className="w-full h-full bg-slate-200 py-10 px-10">
      <Heading Heading="Task Planning" />
      <Body />
    </div>
  );
}

const Heading = ({ Heading }: { Heading?: string }) => {
  return (
    <div className="relative block ">
      <span className="relative text-4xl text-slate-800 font-bold ml-10 bg-slate-200 z-10 px-4">
        {Heading}
      </span>
      <hr className="relative w-full h-1 bg-slate-600 -translate-y-5 z-0" />
      <CostToRun cost="<1 cent" />
    </div>
  );
};

const Body = ({}: {}) => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const tasks = [
    "Create a plan to generate an accurate graphic comparing interest rates public equity multiples over the last ten years. ",
  ];

  const [task, setTask] = useState(tasks[0]);

  const explainImage = ({ setLoading, setResponse }: any) => {
    setLoading(true);
    setResponse(""); // Clear the response state

    // Close any existing event source if already open
    if ((window as any).eventSource) {
      (window as any).eventSource.close();
    }

    // Create a new EventSource connection to the server
    (window as any).eventSource = new EventSource("/api/Task-Planning");

    // Set up what to do when a new message is received
    (window as any).eventSource.onmessage = (event: MessageEvent) => {
      try {
        let newData: any = JSON.parse(event.data); // Parse the JSON data received

        //@ts-ignore
        setResponse((prevResponse) => [...prevResponse, newData]); // Append new data to the response state
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
      setLoading(false);
    };

    // Handle any errors that occur
    (window as any).eventSource.onerror = (error: Event) => {
      console.error("EventSource failed:", error);
      (window as any).eventSource.close(); // Close the event source on error
      setLoading(false);
    };
  };

  return (
    <div className="h-full overflow-scroll">
      <div className="w-full bg-slate-200 py-10 flex flex-col gap-8">
        <div className="bg-slate-100 border border-slate-400 flex justify-between flex-row p-4 rounded-lg max-h-full max-w-[1200px] min-h-[88px]">
          <div>
            <h2 className="text-xl text-slate-800 font-semibold">Request</h2>
            <p className="text-slate-800 text-lg">{task}</p>
          </div>
          {!loading ? (
            <button
              onClick={() => explainImage({ setLoading, setResponse })}
              className="max-w-64 bg-slate-600 text-white p-2 rounded-md mt-4"
            >
              Generate Plan
            </button>
          ) : (
            <button className="max-w-64 bg-slate-400 text-white p-2 rounded-md mt-4">
              Generate Plan
            </button>
          )}
        </div>

        {response ? (
          <div className="bg-slate-100 border border-slate-400 flex justify-between flex-col p-4 rounded-lg">
            <div className="">
              <ReactMarkdown
                components={{
                  h3: ({ node, ...props }) => (
                    <h3
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.25rem",
                        marginTop: "12px",
                        textDecoration: "underline",
                      }}
                      {...props}
                    />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong style={{ fontWeight: "600" }} {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p
                      style={{
                        fontSize: "1.1rem",
                      }}
                      {...props}
                    />
                  ),
                }}
              >
                {/* @ts-ignore */}
                {response.join("")}
              </ReactMarkdown>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
