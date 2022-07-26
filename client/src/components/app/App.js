import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
// import SpServices from "../services/SpServices";
import Navbar from "../layouts/navbar/navbar";
import Footer from "../layouts/footer/footer";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import ZoomService from "../pages/services/ZoomService";
import NotionService from "../pages/services/NotionService";
import SlackService from "../pages/services/SlackService";
import EgnyteService from "../pages/services/EgnyteService";
import GoToAssistService from "../pages/services/GoToAssistService";
import JamfService from "../pages/services/JamfService";

// commented the import statement for the SpServices
// everything there has to go into its own component

function App() {
	// let nw = new network('https://portal.office.com', 15)
	//   useEffect(() => {
	//       // nw.pollOffice((e) => e)
	//       axios.get('https://status.slack.com/'
	//       )
	//   }, [])

	return (
		<div className="App">
			<Navbar />
			<BrowserRouter>
				{/* <SpServices url='https://status.logmeinremotesupport.com'/> */}
				{/* functional with {"https://status.zoom.us",https://status.notion.so, https://status.egnyte.com, https://status.logmeinremotesupport.com } */}
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="dashboard" element={<Dashboard />} />

					{/*Services*/}

					<Route path="/services/zoom" element={<ZoomService />} />
					<Route path="/services/notion" element={<NotionService />} />
					<Route path="/services/slack" element={<SlackService />} />
					<Route path="/services/egnyte" element={<EgnyteService />} />
					<Route path="/services/gotoassist" element={<GoToAssistService />} />
					<Route path="/services/jamf" element={<JamfService />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}
export default App;
