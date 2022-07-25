import React from "react";

function ServiceTable() {
	return (
		<div className="flex flex-col justify-center items-center mx-64 p-10 bg-[#F3FBF7] rounded-md">
			<div className="flex items-center gap-60 justify-between w-full">
				<h2 className="text-[24px] text-[#163a5f] font-bold">
					Monitoring 2 Services:
				</h2>
				<button className="cursor-pointer border mr-2 px-9 py-3 text-xl rounded-md bg-green-500 text-white mt-4 hover:bg-green-700 font-bold">
					Add Service
				</button>
			</div>
			<div className="w-full mt-5">
				<hr />
			</div>
			<div className="flex items-center gap-60 justify-between w-full">
				<h2 className="text-[24px] text-lg font-medium">GitHub</h2>
				<button className="cursor-pointer text-lg border mr-2 px-9 py-3 rounded-md bg-green-500 text-white mt-4 hover:bg-green-700 font-bold">
					Up
				</button>
			</div>
			<div className="flex items-center justify-between w-full">
				<h2 className="text-[24px] text-lg font-medium">LinkedIn</h2>
				<button className="cursor-pointer text-lg border mr-2 px-9 py-3 rounded-md bg-green-500 text-white mt-4 hover:bg-green-700 font-bold">
					Up
				</button>
			</div>
		</div>
	);
}

export default ServiceTable;
