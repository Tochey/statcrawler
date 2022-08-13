import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa'
import EgnyteLogo from '../pages/assets/images/egnyte.png'
import GotoLogo from '../pages/assets/images/gotoassistance.png'
import ZoomLogo from '../pages/assets/images/zoom.png'
import DashboardCard from "./dashboard.cards";

const serviceCards = [
  {
    logo: <img src={EgnyteLogo} width={150} alt="egnyte" />,
    status: "",
    recentEvent: "",
    link: ''
  },
  {
    logo: <img src={GotoLogo} width={150} alt="egnyte" />,
    status: "",
    recentEvent: "",
    link: ''
  },
  {
    logo: <img src={ZoomLogo} width={150} alt="egnyte" />,
    status: "",
    recentEvent: "",
    link: ''
  },
  {
    logo: <img src={EgnyteLogo} width={150} alt="egnyte" />,
    status: "",
    recentEvent: "",
    link: ''
  }
]

const Dashboard = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState();

  // get token from localStorage stored from user login
  const token = localStorage.getItem("token");

  useEffect(() => {

    // request dashboard endpoint with token from localStorage
    fetch("http://localhost:8081/dashboard", {
      headers: {
        Authorization: token,
      },
    })
      .then((e) => {
        // if denied the token is no longer valid.... redirect user to login page(this is where refresh tokens come into play)
        if (e.status > 400) {
          localStorage.removeItem("token");
          return navigate("/login");
        } else return e.json();
      })
      .then((e) => e && setUserEmail(e.message));
  }, );

  return (
    <div className="py-[120px] px-[100px] w-full h-full">
      <div className="absolute flex right-[50px] cursor-pointer items-center">
        <p className="text-green-500 font-medium cursor-pointer mr-2">{userEmail}</p>
        <FaUserCircle size={20} className="text-green-500"></FaUserCircle>
      </div>

      <div className="h-full mt-[100px]">
        <div className="flex flex-wrap justify-center w-full gap-[10px]">
          {serviceCards.map((v, index) => (
            <DashboardCard {...v} key={index} name={v.logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
