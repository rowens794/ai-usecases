import React from "react";

type Props = {};

export default function Index({}: Props) {
  return (
    <div className="w-full h-full bg-slate-200 py-10 px-10">
      <Heading Heading="Steven Cohen Interview" />
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
    </div>
  );
};
