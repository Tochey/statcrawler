import React from "react";
import FeaturesCard from "./FeaturesCard";

export default function Features() {
  return (
    <div className="py-[80px] flex justify-center">
      <div>
        <h2 className="flex justify-center text-[30px] font-bold text-green-600"> Features</h2>
        <p className="text-[24px]">we built this to supplement your workflow and improve performance</p>
        <p>our list of features</p>
        <FeaturesCard/>
      </div>
    </div>
  );
}
