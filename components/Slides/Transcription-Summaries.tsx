import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
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
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/Speech-to-Text");
      const data = await response.json();
      setMessages(data);
    };

    if (!messages) fetchData();
  });

  return (
    <div className="w-full h-full bg-slate-200 py-10 px-10">
      <Heading Heading="Meeting Notes" />
      <Body messages={messages} />
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
      <CostToRun cost="~10 cents" />
    </div>
  );
};

const Body = ({ messages }: { messages: any }) => {
  return (
    <div className="w-full h-full bg-slate-200 py-10 gap-8 grid grid-cols-5 ">
      {messages && messages.data && (
        <MessageContainer messages={messages.data} />
      )}
      {messages && messages.summary && <Summary summary={messages.summary} />}
    </div>
  );
};

const MessageContainer = ({ messages }: { messages: Data[] }) => {
  return (
    <div className="p-4 bg-slate-100 border border-slate-500 overflow-y-scroll rounded-lg shadow-lg col-span-2">
      <div className="">
        {messages.map((message: any, index: any) => {
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

const Summary = ({ summary }: { summary: any }) => {
  const [isLoaded, setLoaded] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState(false);

  const updateTimer = () => {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      setLoaded(true);
    }, 3000);
  };

  const heading = summary[0];
  const list = summary.slice(1);
  return (
    <div className="p-4 bg-slate-100 border border-slate-500 overflow-hidden rounded-lg shadow-lg col-span-3 block overflow-y-scroll">
      {!showLoading && !isLoaded ? (
        <div className="flex justify-center items-center h-full w-full">
          <button
            onClick={() => updateTimer()}
            className="bg-slate-600 text-white p-2 rounded-md mt-4"
          >
            Summarize Transcription
          </button>
        </div>
      ) : (
        <></>
      )}

      {showLoading && (
        <div className="flex justify-center items-center h-full w-full">
          <div className="p-8 text-center bg-slate-100 rounded-lg border border-slate-300 shadow-lg">
            <ArrowPathIcon
              className="animate-spin h-20 w-20 text-slate-600 mx-auto"
              aria-hidden="true"
            />
          </div>
        </div>
      )}

      {isLoaded && (
        <div className="">
          <div className="mb-8">
            <h2 className="text-xl text-slate-800 font-semibold text-center">
              {heading.title}
            </h2>
            <p className="text-slate-600 text-md text-center">{heading.date}</p>
          </div>
          {list.map((message: any, index: any) => {
            return (
              <div key={index} className="flex flex-col mb-4">
                <h3 className="text-slate-800 font-semibold">{message.name}</h3>
                {message.points.map((item: any, index: any) => {
                  return (
                    <div key={index} className="flex flex-col">
                      <p className="text-slate-600 ml-2">- {item}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
