import React from "react";

export default function Teams() {
	return (
		<div className="py-[80px] flex justify-center">
			<div className=" flex justify-center flex-col items-center">
				<h2 className="text-[40px] font-bold text-green-600">
					Designed for Teams and Developers{" "}
				</h2>
				<p className="font-bold flex justify-center text-[20px]">
					built by humans for teams and organizations
				</p>
				<ul className="mt-2 text-center">
					<li> Choose from a wide range of services</li>
					<li> Get custom tags and get real time metrics</li>
					<li>Get real time notifications for any event incurred</li>
				</ul>
				<button className="cursor-pointer border mr-2 px-3 py-2 rounded-md bg-green-500 text-white mt-4 hover:bg-green-700">
					Access your dashboard
				</button>
			</div>
		</div>
	);
}
