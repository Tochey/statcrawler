import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import EgnyteLogo from "../pages/assets/images/egnyte.png";
import GotoLogo from "../pages/assets/images/gotoassistance.png";
import ZoomLogo from "../pages/assets/images/zoom.png";
import Notion from "../pages/assets/images/notion.png";
import Slack from "../pages/assets/images/slack.png";
import DashboardCard from "./dashboard.cards";
import Google_Cloud from "../pages/assets/images/google-cloud.png";
import getUserInfo from "../../utilities/decodeJwt";


const serviceCards = [
  {
    logo: <img src={EgnyteLogo} width={150} alt="egnyte" />,
    status: "",
    recentEvent: "",
    link: "",
    serviceName: "Egnyte",
    tableConfig: {
      columns: [
        {
          id: 1,
          identifier: "date",
          label: "Date",
        },
        {
          id: 2,
          identifier: "name",
          label: "Name",
        },
      ],
      dataKey: "incidents",
    },
    serviceEndpoint: "http://localhost:8081/api/v1/services/egnyte",
  },
  {
    logo: <img src={Slack} width={37} alt="slack logo" />,
    status: "",
    recentEvent: "",
    link: "",
    serviceName: "Slack",
    tableConfig: {
      columns: [
        {
          id: 1,
          identifier: "title",
          label: "Title",
        },
        {
          id: 2,
          identifier: "publishdate",
          label: "Publishdate",
        },
      ],
      dataKey: "incident_history",
    },
    serviceEndpoint: "http://localhost:8081/api/v1/services/slack",
  },
  {
    logo: <img src={ZoomLogo} width={150} alt="egnyte" />,
    status: "",
    recentEvent: "",
    link: "",
    serviceName: "Zoom",
    tableConfig: {
      columns: [
        {
          id: 1,
          identifier: "date",
          label: "Date",
        },
        {
          id: 2,
          identifier: "name",
          label: "Name",
        },
      ],
      dataKey: "incidents",
    },
    serviceEndpoint: "http://localhost:8081/api/v1/services/zoom",
  },
  {
    logo: <img src={GotoLogo} width={150} alt="GotoAssist Logo"/>,
    status: "",
    recentEvent: "",
    link: "",
    serviceName: "GotoAssist",
    tableConfig: {
      columns: [
        {
          id: 1,
          identifier: "date",
          label: "Date",
        },
        {
          id: 2,
          identifier: "name",
          label: "Name",
        },
      ],
      dataKey: "incidents",
    },
    serviceEndpoint: "http://localhost:8081/api/v1/services/goToAssist"
  },
  {
    logo: <img src={Notion} alt="notion logo" width={38}/>,
    status: "",
    recentEvent: "",
    link: "",
    serviceName: "Notion",
    tableConfig: {
      columns: [
        {
          id: 1,
          identifier: "date",
          label:"Date",
        },
        {
          id: 2,
          identifier: "name",
          label: "Name",
        },
      ],
      dataKey: "incidents",
    },
    serviceEndpoint: "http://localhost:8081/api/v1/services/notion",
  },
  {
    logo: <img src={EgnyteLogo} width={150} alt="jamf logo"/>,
    status: "",
    recentEvent: "",
    link: "",
    serviceName: "Jamf",
    tableConfig: {
      columns: [
        {
          id: 1,
          identifier: "date",
          label: "Date"
        },
        {
          id: 2,
          identifier: "name",
          label: "Name"
        },
      ],
      dataKey: "incidents"
    },
    serviceEndpoint: "http://localhost:8081/api/v1/services/jamf"
  },
  {
    logo: <img src={Google_Cloud} alt="office" width={50}/>,
    status: "",
    recentEvent: "",
    link: "",
    serviceName: "Office",
    tableConfig: {
      columns: [
        {
          id: 1,
          identifier: "LastRefreshed",
          label: "Date"
        },
        {
          id: 2,
          identifier: "Title",
          label: "Name"
        },
      ],
      dataKey: "Services"
    },
    serviceEndpoint: "http://localhost:8081/api/v1/services/office"
  }
  /* {
    logo: <img src={GotoLogo} width={150} alt="egnyte" />,
    status: "",
    recentEvent: "",
    link: "",
    modal: <GotoModal />,
  },
  {
    logo: <img src={ZoomLogo} width={150} alt="egnyte" />,
    status: "",
    recentEvent: "",
    link: "",
    modal: <ZoomModal />,
  },

  {
    logo: <img src={EgnyteLogo} width={150} alt="egnyte" />,
    status: "",
    recentEvent: "",
    link: "",
    modal: <JamfModal />,
  },
  {
    logo: <img src={Notion} width={37} alt="egnyte" />,
    status: "",
    recentEvent: "",
    link: "",
    modal: <NotionModal />,
  },
  {
    logo: <img src={Slack} width={37} alt="egnyte" />,
    status: "",
    recentEvent: "",
    link: "",
    modal: <SlackModal />,
  },
  {
    logo: <img src={Google_Cloud} width={37} alt="egnyte" />,
    status: "",
    recentEvent: "",
    link: "",
    modal: <OfficeModal />,
  }, */
];

const Dashboard = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const currentDate = new Date();
    if (
      (getUserInfo() && getUserInfo)().exp * 1000 < currentDate.getTime() ||
      !getUserInfo()
    ) {
      return navigate("/login");
    } else {
      setUser(getUserInfo());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="py-[120px] px-[100px] w-full h-full">
      <div className="absolute flex right-[50px] cursor-pointer items-center">
        <p className="text-green-500 font-medium cursor-pointer mr-2">
          {user?.email}
        </p>
        <FaUserCircle size={20} className="text-green-500"></FaUserCircle>
        <div>
          {/* put this button in navbar  */}
          <button
            className="p-4"
            style={{ color: "green", fontWeight: "bold" }}
            onClick={(e) => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
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
