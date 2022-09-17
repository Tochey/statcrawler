import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa'
import EgnyteLogo from '../pages/assets/images/egnyte.png'
import GotoLogo from '../pages/assets/images/gotoassistance.png'
import ZoomLogo from '../pages/assets/images/zoom.png'
import DashboardCard from "./dashboard.cards";
import getUserInfo from "../../utilities/decodeJwt";

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
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const currentDate = new Date()
    if ((getUserInfo() && getUserInfo)().exp * 1000 < currentDate.getTime() || !getUserInfo()) {
      return navigate('/login')
    } else {
      setUser(getUserInfo())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="py-[120px] px-[100px] w-full h-full">
      <div className="absolute flex right-[50px] cursor-pointer items-center">
        <p className="text-green-500 font-medium cursor-pointer mr-2">{user?.email}</p>
        <FaUserCircle size={20} className="text-green-500"></FaUserCircle>
      </div>

      <div className="h-full mt-[100px]">
        <div className="flex flex-wrap justify-center w-full gap-[10px]">
          {serviceCards.map((v, index) => (
            <DashboardCard {...v} key={index} name={v.logo} />
          ))}
        </div>
         {/* put this button in navbar  */}
        <button style={{color: "green", fontWeight: "bold"}} onClick={((e) => {
          localStorage.clear()
          navigate('/login')
        })}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
