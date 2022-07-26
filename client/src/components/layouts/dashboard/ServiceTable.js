import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ServiceTable() {
	// Zoom Data
	const [zoom, setZoom] = useState([]);
	async function getZoomData() {
		const res = await fetch("http://localhost:8080/services/zoom");
		const req = await res.json();
		setZoom(req.summary);
	}
	console.log(zoom);
	// Notion Data
	const [notion, setNotion] = useState([]);
	async function getNotionData() {
		const res = await fetch("http://localhost:8080/services/notion");
		const req = await res.json();
		setNotion(req);
	}
	// console.log(notion);

	// Slack Data
	const [slack, setSlack] = useState([]);
	async function getSlackData() {
		const res = await fetch("http://localhost:8080/services/slack");
		const req = await res.json();
		setSlack(req);
	}
	// console.log(slack);

	// Egnytye Data
	const [egnyte, setEgnyte] = useState([]);
	async function getEgnyteData() {
		const res = await fetch("http://localhost:8080/services/egnyte");
		const req = await res.json();
		setEgnyte(req);
	}
	// console.log(egnyte);

	// goToAssist Data
	const [goToAssist, setGoToAssist] = useState([]);
	async function getGoToAssistData() {
		const res = await fetch("http://localhost:8080/services/goToAssist");
		const req = await res.json();
		setGoToAssist(req);
	}
	console.log(goToAssist);

	// Office Data
	const [office, setOffice] = useState([]);
	async function getOfficeData() {
		const res = await fetch("http://localhost:8080/services/office");
		const req = await res.json();
		setOffice(req);
	}
	// console.log(office);

	// Jamf Data
	const [jamf, setJamf] = useState([]);
	async function getJamfData() {
		const res = await fetch("http://localhost:8080/services/jamf");
		const req = await res.json();
		setJamf(req);
	}
	// console.log(jamf);
	useEffect(() => {
		// getZoomData();
		// getNotionData();
		// getSlackData();
		// getEgnyteData();
		// getGoToAssistData();
		// getOfficeData();
		// getJamfData();
	}, []);
	return (
		<div className="flex flex-col justify-center items-center mx-64 p-10 bg-[#F3FBF7] rounded-md">
			<div className="flex items-center gap-60 justify-between w-full">
				<h2 className="text-[24px] text-[#163a5f] font-bold">
					Monitoring 7 Services:
				</h2>
			</div>
			<div className="w-full mt-5">
				<hr />
			</div>
			<div className="flex items-center gap-60 justify-between w-full">
				<Link to="/services/zoom">
					<h2 className="text-[24px] text-lg font-medium">Zoom</h2>
				</Link>
				<button className="cursor-pointer text-lg border mr-2 px-9 py-3 rounded-md bg-green-500 text-white mt-4 hover:bg-green-700 font-bold">
					Up
				</button>
			</div>
			<div className="flex items-center justify-between w-full">
				<Link to="/services/notion">
					<h2 className="text-[24px] text-lg font-medium">Notion</h2>
				</Link>
				<button className="cursor-pointer text-lg border mr-2 px-9 py-3 rounded-md bg-green-500 text-white mt-4 hover:bg-green-700 font-bold">
					Up
				</button>
			</div>
			<div className="flex items-center justify-between w-full">
				<Link to="/services/slack">
					<h2 className="text-[24px] text-lg font-medium">Slack</h2>
				</Link>
				<button className="cursor-pointer text-lg border mr-2 px-9 py-3 rounded-md bg-green-500 text-white mt-4 hover:bg-green-700 font-bold">
					Up
				</button>
			</div>
			<div className="flex items-center justify-between w-full">
				<Link to="/services/egnyte">
					<h2 className="text-[24px] text-lg font-medium">Egnyte</h2>
				</Link>
				<button className="cursor-pointer text-lg border mr-2 px-9 py-3 rounded-md bg-green-500 text-white mt-4 hover:bg-green-700 font-bold">
					Up
				</button>
			</div>
			<div className="flex items-center justify-between w-full">
				<Link to="/services/gotoassist">
					<h2 className="text-[24px] text-lg font-medium">GoToAssist</h2>
				</Link>
				<button className="cursor-pointer text-lg border mr-2 px-9 py-3 rounded-md bg-green-500 text-white mt-4 hover:bg-green-700 font-bold">
					Up
				</button>
			</div>
			<div className="flex items-center justify-between w-full">
				<h2 className="text-[24px] text-lg font-medium">Office</h2>
				<button className="cursor-pointer text-lg border mr-2 px-9 py-3 rounded-md bg-green-500 text-white mt-4 hover:bg-green-700 font-bold">
					Up
				</button>
			</div>
			<div className="flex items-center justify-between w-full">
				<Link to="/services/jamf">
					<h2 className="text-[24px] text-lg font-medium">Jamf</h2>
				</Link>
				<button className="cursor-pointer text-lg border mr-2 px-9 py-3 rounded-md bg-green-500 text-white mt-4 hover:bg-green-700 font-bold">
					Up
				</button>
			</div>
		</div>
	);
}

export default ServiceTable;

// <button className="cursor-pointer border mr-2 px-9 py-3 text-xl rounded-md bg-green-500 text-white mt-4 hover:bg-green-700 font-bold">
// 	Add Service
// </button>
