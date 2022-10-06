/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function ModalPagination({
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
        <div className="py-2">
            <div className="flex justify-center mb-2">
                <p className="text-gray-500 text-sm"> showing 
                    <span className="font-medium">{""} {currentModalPage*dataPerPage-10} {""}</span>
                    to
                    <span className="font-medium"> {currentModalPage * dataPerPage} </span>
                </p>
            </div>
            <nav className="block ">
                <div className="flex justify-center">
                <ul className="flex pl-0 rounded-full list-none flex-wrap">
                    <li>{modalNumber.map((number) => (
                        <a 
                            onClick={() => {
                            paginate(number)
                        }}
                        href="#"
                        className={ 
                            currentModalPage === number
                            ? "bg-green-500 rounded-full text-white hover:bg-green-600 relative inline-flex items-center px-4 py-2 text-sm font-medium" :
                            "border-gray-400 text-white rounded-full bg-green-500 hover:bg-green-400 relative inline-flex items-center px-4 py-2 mr-2 text-sm font-medium"}>
                            {number}
                        </a>
                    ))}</li>
                </ul>
                </div>
            </nav>
        </div>
    )
}