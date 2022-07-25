import React from "react";

export default function Hero() {
	return (
		<div className="py-[160px] px-[50px] justify-start">
			<div className="py-[60px] px-[50px]">
				<h2 className="text-[40px] font-bold">
					Get Instant Service Monitoring
				</h2>
				<p className="mt-1 ml-2 text-[20px] font-semibold">
					We do the monitoring, and you get work done
				</p>
				<button className="mt-4 text-[15px] shadow-md font-semibold border rounded-lg px-4 text-white py-4 hover:bg-green-700 bg-green-500">
					GET STARTED
				</button>
			</div>
		</div>
	);
}
