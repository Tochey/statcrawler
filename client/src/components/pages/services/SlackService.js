import React, { useState, useEffect } from "react";

function SlackService() {
	// Slack Data
	const [slack, setSlack] = useState([]);
	async function getSlackData() {
		const res = await fetch("http://localhost:8080/services/slack");
		const req = await res.json();
		setSlack(req.incident_history);
	}
	console.log(slack);
	useEffect(() => {
		getSlackData();
	}, []);
	return (
		<div className="pt-32">
			<h2 className="text-[28px] text-[#163a5f] font-bold text-center">
				Recent Incidents
			</h2>
			<div className="mt-10">
				<table className="table-auto">
					<thead className="">
						<tr className=" ">
							<td className="text-[20px] text-[#163a5f] font-medium">Date</td>
							<td className="text-[20px] text-[#163a5f] font-medium">Type</td>
							<td className="text-[20px] text-[#163a5f] font-medium">
								Message
							</td>
						</tr>
					</thead>
					<tbody>
						{slack.map(incident => {
							return (
								<tr key={incident.date}>
									<td className="pr-28">{incident.date}</td>
									<td className="pr-32">TYPE</td>
									<td>{incident.title}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default SlackService;
