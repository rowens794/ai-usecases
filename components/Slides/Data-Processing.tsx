import React from "react";

type Props = {};

export default function Index({}: Props) {
  return (
    <div className="w-full h-full bg-slate-200 py-10 px-10 ">
      <Heading Heading="Data Processing & Analysis" />
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
    </div>
  );
};

const Body = ({}: {}) => {
  return (
    <>
      <div className="h-full overflow-scroll w-full">
        <div className="w-full bg-slate-200">
          <div className=" relative">
            <div className="">
              <div style={{ margin: "20px", textAlign: "center" }}>
                <video
                  width={1080 * 0.8}
                  height={640 * 0.8}
                  src="https://bu1el6cogjplkojf.public.blob.vercel-storage.com/Mutual%20Fund%20Returns-DThpt0t6POZexy3kYZ5cviouVRC8tV.mp4"
                  title="YouTube video player"
                  controls
                ></video>
              </div>
            </div>
          </div>

          <div className="pt-12">
            <h3 className="text-2xl font-bold text-slate-800">Source Files</h3>
            <div>
              <a
                className="block text-blue-600 underline w-72"
                href="/mutualfundreturns/AGG.csv"
              >
                AGG ETF Daily Values
              </a>
              <a
                className="block text-blue-600 underline w-72"
                href="/mutualfundreturns/AGG.csv"
              >
                JPM Core Bond Fund Daily Values
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
