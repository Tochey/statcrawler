import React from 'react'
// import { Link } from 'react-router-dom';

const DashboardCard = ({ logo, status, recentEvent, modal }) => {
  return (
    <div className="h-[350px] mb-4 bg-white w-[330px] cursor-pointer">
      <div className="flex justify-center mb-4 border-b border-black">{logo}</div>
      <div className="flex justify-center mt-3 border h-10 items-center text-white bg-green-600 rounded-md">all systems operational</div>
      <div className='border-b border-black mt-6'></div>
      <div className="border-black flex justify-center mt-6">{modal}</div>
      <div>{status}</div>
      <div>{recentEvent}</div>
    </div>
  );
};

export default DashboardCard;
/*
todo: code logic to display colors red/yellow/green depends on current service stats

*/
