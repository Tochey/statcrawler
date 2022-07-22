import React from "react";

export default function Teams() {
  return (
    <div className="py-[80px] flex justify-center">
      <div className="">
        <h2 className="text-[40px] font-bold text-green-600">
          Designed for Teams and Developers{" "}
        </h2>
        <p className="font-bold flex justify-center text-[20px]">built by humans for teams and organizations</p>
        <ul className="mt-2">
          <li> choose from a wide range of services</li>
          <li> set custom tags and get real time metrics</li>
          <li>Get real time notifications for any event incurred</li>
        </ul>
        <button>Access your dashboard</button>
      </div>
    </div>
  );
}
