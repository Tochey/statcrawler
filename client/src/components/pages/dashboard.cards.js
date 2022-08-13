import React from 'react'

const DashboardCard = ({ logo, status, recentEvent }) => {
  return (
    <div className="h-[350px] mb-4 bg-white w-[330px] cursor-pointer">
      <div className="flex justify-center border-b border-black">{logo}</div>
      <div className="flex justify-center mt-3 border h-10 items-center text-white bg-green-600 rounded-md">all systems operational</div>
      <div>hello</div>
      <div>{status}</div>
      <div>{recentEvent}</div>
    </div>
  );
};

export default DashboardCard;
