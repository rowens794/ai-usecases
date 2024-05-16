import React from "react";
import Image from "next/image";
import { useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

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
  return (
    <div className="w-full h-full bg-slate-200 py-10 px-10">
      <Heading Heading="Speech Transcription" />
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
      <CostToRun cost="~40 cents / hour" />
    </div>
  );
};

const Body = ({}: {}) => {
  const [response, setResponse] = useState<Data | null>(null);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState(false);

  const update = () => {
    // Fetch the transcript from the server
    updateTimer();
    setLoading(true);
    fetch(`/api/Speech-to-Text`)
      .then((response) => {
        return response.json(); // This needs to be returned
      })
      .then((data: any) => {
        setResponse(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
        setLoading(false);
      });
  };

  const updateTimer = () => {
    setTimer(false);
    setShowLoading(true);
    setTimeout(() => {
      setTimer(true);
      setShowLoading(false);
    }, 3000);
  };

  return (
    <div className="w-full h-full bg-slate-200 py-10 gap-8 relative">
      <iframe
        className="w-[60%] aspect-video rounded-lg shadow-lg "
        src="https://www.youtube.com/embed/mod42cOc1zc"
      ></iframe>
      {!loading ? (
        <button
          onClick={() => update()}
          className="bg-slate-600 text-white p-2 rounded-md mt-4"
        >
          Transcribe Audio
        </button>
      ) : (
        <button className="bg-slate-500 text-slate-200 p-2 rounded-md mt-4">
          Transcribe Audio
        </button>
      )}

      {showLoading && (
        <div className="flex justify-center items-center h-[100%] absolute top-0 left-0 w-full">
          <div className="p-12 text-center bg-slate-100 rounded-lg border border-slate-300 shadow-lg">
            <ArrowPathIcon
              className="animate-spin h-24 w-24 text-slate-600 mx-auto"
              aria-hidden="true"
            />
          </div>
        </div>
      )}

      {response && timer && <MessageContainer messages={response} />}
    </div>
  );
};

const MessageContainer = ({ messages }: { messages: Data }) => {
  return (
    <div className="p-4 absolute top-0 right-0 h-[90%] w-[50%] bg-slate-100 border border-slate-500 overflow-hidden rounded-lg shadow-lg">
      <div className="scroll-content">
        {messages.data.map((message, index) => {
          return (
            <div key={index} className="flex flex-col mb-4">
              <div className="flex flex-col">
                <p className="text-slate-800 font-bold">
                  {message.speaker_name}
                </p>
                <p className="text-slate-500 text-sm">
                  {message.startTime} - {message.endTime}
                </p>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-600">{message.sentence}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
