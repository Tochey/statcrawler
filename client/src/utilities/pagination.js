/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function modalPagination({
    dataPerPage,
    totalData,
    paginate,
    currentModalPage
}){
    const modalNumber = [];
    for(let i = 1; i < Math.ceil(totalData/dataPerPage); i++){
        modalNumber.push(i);
    }
    return(
        <div className="py-2 ">
            <div>
                <p className="text-gray-500 text-sm"> showing 
                    <span className="font-medium">{""} {currentModalPage * dataPerPage - 10} {""}</span>
                    to
                    <span className="font-medium"> {currentModalPage * dataPerPage} </span>
                </p>
            </div>
            <nav className="block">
                <ul className="flex pl-0 rounded-full list-none flex-wrap">
                    <li>{modalNumber.map((number) => (
                        <a 
                            onClick={() => {
                            paginate(number)
                        }}
                        href="#"
                        className={ 
                            currentModalPage === number
                            ? "bg-green-500 text-white hover:bg-green-600 relative inline-flex items-center px-4 py-2 text-sm font-medium" :
                            "bg-white border-gray-400 text-gray-500 hover:bg-green-400 relative inline-flex items-center px-4 py-2 border text-sm font-medium"}>
                            {number}
                        </a>
                    ))}</li>
                </ul>
            </nav>
        </div>
    )
}