import React from "react";
import Image from "next/image";
import { useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

import CostToRun from "../Cost-To-Run";

type Props = {};

export default function Index({}: Props) {
  return (
    <div className="w-full h-full bg-slate-200 py-10 px-10">
      <Heading Heading="PDF Summarization" />
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
      <CostToRun cost="10 pages / ~2 cents" />
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
  const [isLoaded, setLoaded] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState(false);

  const updateTimer = () => {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      setLoaded(true);
    }, 3000);
  };

  return (
    <div className="w-full h-full bg-slate-200 py-10 grid grid-cols-5 gap-8">
      <div className="col-span-2">
        <Image
          className="rounded-md col-span-2 contrast-125"
          src="/PDF.png"
          alt="PDF"
          width={600}
          height={600}
        />
      </div>

      <div className="bg-slate-100 col-span-3 border border-slate-400 flex justify-between flex-col p-4 rounded-lg max-h-full overflow-hidden">
        <Summary
          isLoaded={isLoaded}
          showLoading={showLoading}
          updateTimer={updateTimer}
        />
      </div>
    </div>
  );
};

const Summary = ({
  isLoaded,
  showLoading,
  updateTimer,
}: {
  isLoaded: boolean;
  showLoading: boolean;
  updateTimer: () => void;
}) => {
  const heading = {
    title: "Fixed Income Asset Allocation Outlook 2024",
    date: "March 2024",
  };

  return (
    <div className="p-4 bg-slate-100 overflow-hidden rounded-lg block h-full">
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

      {!isLoaded ? (
        <div className="w-full flex flex-col justify-center h-full">
          <button
            onClick={() => updateTimer()}
            className="bg-slate-600 text-white p-2 rounded-md mt-4 mx-auto w-56 "
          >
            Summarize PDF
          </button>
        </div>
      ) : (
        <></>
      )}

      {isLoaded && (
        <div className="">
          <div className="mb-8">
            <h2 className="text-xl text-slate-800 font-semibold text-center">
              {heading.title}
            </h2>
            <p className="text-slate-600 text-md text-center">{heading.date}</p>
          </div>
          {summary.map((message: any, index: any) => {
            return (
              <div key={index} className="flex flex-col mb-4">
                <h3 className="text-slate-800 font-semibold">
                  {message.Heading}
                </h3>
                {message.Items.map((item: any, index: any) => {
                  return (
                    <div key={index} className="flex flex-row">
                      <span>-</span>
                      <p className="text-slate-600 ml-2">{item}</p>
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

const summary = [
  {
    Heading: "Most Attractive Sectors",
    Items: [
      "High-Quality Short-Duration Bonds: Offers substantial credit protection and attractive yields that surpass short-end Treasury yields, especially appealing as the Fed's hiking cycle has ended.",
      "Emerging Markets (EM) Fixed Income: Particularly attractive due to early and aggressive rate hikes by EM central banks, improving economic outlooks, and resilience in corporate fundamentals despite global pressures.",
      "Collateralized Loan Obligations (CLOs): Driven by high interest income from floating-rate coupons and potential for strong total returns across the capital structure, especially in a 'higher-for-longer' rate environment.",
    ],
  },
  {
    Heading: "Biggest Opportunities",
    Items: [
      "Agency Mortgage-Backed Securities (MBS): Expected to benefit from lower rate volatility and reduced supply pressures, presenting a favorable risk-reward setup for the year ahead.",
      "Investment Grade (IG) Corporate Credit: Attractive due to tightening spreads, improved yield-to-duration ratios, and a favorable interest rate environment potentially leading to steepening of the yield curve.",
      "Bank Loans: Leveraged loans show promise with expectations of robust issuance and opportunities for active management to navigate a mixed credit landscape.",
    ],
  },
  {
    Heading: "Highest Risk Sectors",
    Items: [
      "Non-Agency Commercial Mortgage-Backed Securities (CMBS): Facing challenges from higher borrowing costs and economic uncertainties, particularly in office real estate, which may struggle with valuation declines and refinancing risks.",
      "High Yield (HY) Corporate Credit: Although performing well, the sector faces increasing default rates and potential economic headwinds that could affect lower-rated issuers.",
      "U.S. Treasuries: Risks include an inverted yield curve persisting and potentially elevated supply pressures during a contentious presidential election year, which might not match with demand.",
    ],
  },
];
