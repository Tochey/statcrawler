/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import ModalPagination from '../../../utilities/pagination';

export default function GotoAssistData(){
    const [gotoAssist, setGotoAssist] = useState([]);
    const [dataPerPage] = useState(10);
    const [currentModalPage, setCurrentModalPage] = useState(1);

    const [paginatedData, setPaginatedData] = useState([]);


    async function getGotoAssistData(){
        try{
        const res = await fetch('http://localhost:8081/api/v1/services/goToAssist')
        const req = res.json()
        setGotoAssist(req.incidents);
        setPaginatedData([...req.incidents.slice(0, dataPerPage)]);
        } catch (error) {
            alert(error?.message || error);
        }
    }
    console.log(gotoAssist)
    useEffect(() => {
        console.log('working')
        getGotoAssistData()
    }, []);

    const paginate = (modalNumber) => {
        const indexOfLastData = modalNumber * dataPerPage;
        const indexOfFirstData = indexOfLastData - dataPerPage;
        setPaginatedData([...gotoAssist.slice(indexOfFirstData, indexOfLastData)])
        setCurrentModalPage(modalNumber);
    };

    return(
        <div className="flex flex-col">
            <div className="overflow-y-auto">
                <div className="flex justify-between py-3 pl-2">
                      {/* <div className='relative max-w-xs'>
                        <label htmlFor='service-search' className='sr-only'> Search </label>
                        <input
                            type="text"
                            name="service-search"
                            id='service-search'
                            className='block w-full p-3 pl-10 text-white text-sm border-gray-200 rounded-md focus:border-blue-500
                            focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
                            placeholder='Search'
                        />
                        <div className='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none'>
                            <BiFilter 
                            className='h-3.5 w-3.5 text-gray-400'
                            height={16}
                            width={16}
                            />
                        </div>
                    </div> */}
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-md">
                            <table className='min-w-full divide-y table-auto divide-gray-200'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th className='py-3 flex justify-center text-sm font-bold border-r text-gray-500'>
                                            Date
                                        </th>
                                        <th className='px-[150px] text-sm font-bold text-left text-gray-500'>
                                            Name
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-300'>
                                    {gotoAssist ? (
                                        paginatedData.map((incident) => {
                                            return(
                                                <tr key={incident.date} className='odd:bg-gray-200'>
                                                    <td className='px-4 py-3 text-sm text-gray-500 whitespace-nowrap'>
                                                        {incident.date}
                                                    </td>
                                                    <td className='px-4 py-3 text-sm text-gray-500 whitespace-nowrap'>
                                                        {incident.date}
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    ): (
                                        <p>no data</p>
                                    )}
                                </tbody>
                            </table>
                            <ModalPagination
                                dataPerPage={dataPerPage}
                                // totalData={gotoAssist.length}
                                currentModalPage={currentModalPage}
                                paginate={paginate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}