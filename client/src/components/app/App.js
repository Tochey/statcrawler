import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
// import SpServices from "../services/SpServices";
import Navbar from "../layouts/navbar/navbar";
import Footer from "../layouts/footer/footer";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";

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
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}
export default App;
