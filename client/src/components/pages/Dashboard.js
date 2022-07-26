import React, { useState, useEffect } from "react";
import ServiceTable from "../layouts/dashboard/ServiceTable";
import Hero from "../layouts/hero/hero";

function Dashboard() {
	return (
		<div className="pt-32 flex flex-col">
			<h2 className="text-[24px] text-center pb-10 text-[#163a5f] text-3xl font-bold">
				Manage Your Dashboard
			</h2>
			<ServiceTable />
		</div>
	);
}

export default Dashboard;
