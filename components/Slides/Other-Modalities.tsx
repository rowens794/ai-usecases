import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

type Props = {};

export default function Index({}: Props) {
  const [messages, setMessages] = useState<any>(null);

  const [showDalle, setShowDalle] = useState<boolean>(false);
  const [showTtV, setShowTtV] = useState<boolean>(false);
  const [showTtS, setShowTtS] = useState<boolean>(false);
  const [showTtM, setShowTtM] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/Task-Planning");
      const data = await response.json();
      setMessages(data);
    };

    if (!messages) fetchData();
  });

  return (
    <div className="w-full h-full bg-slate-200 py-10 px-10 ">
      {showDalle ? (
        <div
          className="w-full h-full bg-gray-100 absolute top-0 left-0 z-50 p-24"
          onClick={() => setShowDalle(false)}
        >
          <div className="w-full h-full relative">
            <Image
              alt={"image"}
              fill={true}
              src="/phones.png"
              className="w-full h-full z-10 relative"
            />
          </div>
        </div>
      ) : null}

      {showTtV ? (
        <div
          className="w-full h-full bg-gray-100 absolute top-0 left-0 z-50 p-24"
          onClick={() => setShowTtV(false)}
        >
          <div style={{ margin: "20px", textAlign: "center" }}>
            <iframe
              width="1080"
              height="640"
              src="https://www.youtube.com/embed/dIcNDn7sAbg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : null}

      {showTtS ? (
        <div
          className="w-full h-full bg-gray-100 absolute top-0 left-0 z-50 p-24"
          onClick={() => setShowTtS(false)}
        >
          <div style={{ margin: "20px", textAlign: "center" }}>
            <iframe
              width="1080"
              height="640"
              src="https://www.youtube.com/embed/VTh8Bbg-c2M"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : null}

      {showTtM ? (
        <div
          className="w-full h-full bg-gray-100 absolute top-0 left-0 z-50 p-24"
          onClick={() => setShowTtM(false)}
        >
          <div style={{ margin: "20px", textAlign: "center" }}>
            <iframe
              width="1080"
              height="640"
              src="https://www.youtube.com/embed/PowzAsHg0m8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : null}

      <Heading Heading="Progress in Other Modalities" />
      <Body
        setShowDalle={setShowDalle}
        setShowTtV={setShowTtV}
        setShowTtS={setShowTtS}
        setShowTtM={setShowTtM}
      />
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

const Body = ({
  setShowDalle,
  setShowTtV,
  setShowTtS,
  setShowTtM,
}: {
  setShowDalle: any;
  setShowTtV: any;
  setShowTtS: any;
  setShowTtM: any;
}) => {
  return (
    <>
      <div className="h-full overflow-scroll w-full">
        <div className="w-full bg-slate-200 py-10 grid grid-cols-2 gap-8">
          <div className="w-full aspect-video relative">
            <p className="text-3xl bg-white absolute top-4 left-4 p-2 rounded-sm shadow-md z-20">
              Text to Image
            </p>
            <div
              className="aspect-video w-full bg-green-300"
              onClick={() => setShowDalle(true)}
            >
              <Image
                alt={"image"}
                fill={true}
                src="/phones.png"
                className="w-full h-full z-10 relative"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="w-full aspect-video relative">
            <p className="text-3xl bg-white absolute top-4 left-4 p-2 rounded-sm shadow-md z-20">
              Text to Video
            </p>
            <div
              className="aspect-video w-full bg-green-300"
              onClick={() => setShowTtV(true)}
            >
              <Image
                alt={"image"}
                fill={true}
                src="/Text-to-video.png"
                className="w-full h-full z-10 relative"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div
            className="w-full aspect-video relative"
            onClick={() => setShowTtS(true)}
          >
            <p className="text-3xl bg-white absolute top-4 left-4 p-2 rounded-sm shadow-md z-20">
              Text to Speech
            </p>
            <Image
              alt={"image"}
              fill={true}
              src="/wave.webp"
              className="w-full h-full z-10 relative"
              style={{ objectFit: "cover" }}
            />
            <div className="aspect-video w-full bg-green-300"></div>
          </div>
          <div className="w-full aspect-video relative">
            <p className="text-3xl bg-white absolute top-4 left-4 p-2 rounded-sm shadow-md z-20">
              Text to Music
            </p>
            <div
              className="aspect-video w-full bg-green-300"
              onClick={() => setShowTtM(true)}
            >
              <Image
                alt={"image"}
                fill={true}
                src="/wave.webp"
                className="w-full h-full z-10 relative"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
