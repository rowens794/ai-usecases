import React from "react";
import Image from "next/image";
import { useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

import CostToRun from "../Cost-To-Run";

type Props = {};

export default function Index({}: Props) {
  return (
    <div className="w-full h-full bg-slate-200 py-10 px-10">
      <Heading Heading="Image Recognition" />
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
      <CostToRun cost="~1 cent / image" />
    </div>
  );
};

interface DataResponse {
  message: string;
}

// Assuming the type of your data response
interface DataResponse {
  message: string; // Adjust according to your actual data structure
  // Add other fields as necessary
}

// Define props expected by the function
interface ExplainImageProps {
  setLoading: (loading: boolean) => void;
  setResponse: (response: any) => void;
}

const Body = ({}: {}) => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const explainImage = ({ setLoading, setResponse }: ExplainImageProps) => {
    setLoading(true);
    setResponse(""); // Clear the response state

    // Close any existing event source if already open
    if ((window as any).eventSource) {
      (window as any).eventSource.close();
    }

    // Create a new EventSource connection to the server
    (window as any).eventSource = new EventSource(
      "/api/Image-Recognition-Stream"
    );

    // Set up what to do when a new message is received
    (window as any).eventSource.onmessage = (event: MessageEvent) => {
      try {
        const newData: DataResponse = JSON.parse(event.data); // Parse the JSON data received
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
    <div className="w-full h-full bg-slate-200 py-10 grid grid-cols-3 gap-8">
      <Image
        className="rounded-md border border-slate-500 drop-shadow-lg col-span-2"
        src="/Yield-Curve.png"
        alt="Yield-Curve"
        width={1000}
        height={1000}
      />

      <div className="bg-slate-100 border border-slate-400 flex justify-between flex-col p-4 rounded-lg max-h-full overflow-hidden">
        <div className="max-h-full overflow-hidden">
          <h2 className="text-xl text-slate-800 font-semibold">Request</h2>
          <p className="text-slate-800 text-lg">
            Explain this image and the reason why this chart is interesting.
          </p>

          {loading && (
            <div className="w-full py-12 text-center">
              <ArrowPathIcon
                className="animate-spin h-12 w-12 text-slate-600 mx-auto"
                aria-hidden="true"
              />
            </div>
          )}

          {response && !loading && (
            <>
              <h2 className="text-xl text-slate-800 font-semibold mt-4">
                Response
              </h2>
              <p className="text-slate-800 text-lg">{response}</p>
            </>
          )}
        </div>
        {!loading ? (
          <button
            onClick={() => explainImage({ setLoading, setResponse })}
            className="bg-slate-600 text-white p-2 rounded-md mt-4"
          >
            Explain Image
          </button>
        ) : (
          <button className="bg-slate-500 text-slate-200 p-2 rounded-md mt-4">
            Explain Image
          </button>
        )}
      </div>
    </div>
  );
};
