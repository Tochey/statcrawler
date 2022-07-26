import React, { useState, useEffect } from "react";

function JamfService() {
	// Jamf Data
	const [jamf, setJamf] = useState([]);
	async function getJamfData() {
		const res = await fetch("http://localhost:8080/services/jamf");
		const req = await res.json();
		setJamf(req.incidents);
	}
	console.log(jamf);
	useEffect(() => {
		getJamfData();
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
							<td className="text-[20px] text-[#163a5f] font-medium">
								Message
							</td>
						</tr>
					</thead>
					<tbody>
						{jamf.map(incident => {
							return (
								<tr key={incident.date}>
									<td className="pr-28">{incident.date}</td>
									<td>{incident.name}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default JamfService;
