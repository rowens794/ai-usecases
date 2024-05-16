import React from "react";

type Props = {
  cost: string;
};

export default function CostToRun({ cost }: Props) {
  return (
    <div className="absolute top-1.5 right-10 bg-slate-200 px-4 text-lg font-bold">
      <span>Cost to Run: {cost} </span>
    </div>
  );
}
