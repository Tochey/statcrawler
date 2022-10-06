import React, { useState, useEffect} from 'react'
import { BiFilter } from 'react-icons/bi'

export default function EgnyteService(){
    //getting the data
    const [egnyte, setEgnyte] = useState([])
    async function getEgnyteServiceData(){
        const res = await fetch('http://localhost:8081/api/v1/services/egnyte')
        const req = await res.json()
        setEgnyte(req.incidents)
    }
     console.log(egnyte)
    useEffect(() => {
        getEgnyteServiceData()
    }, [])
    return (
        <div className="flex flex-col">
            <div className="overflow-y-auto">
                <div className='flex justify-between py-3 pl-2'>
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
                    <div className='p-1.5 w-full inline-block align-middle'>
                        <div className='overflow-hidden border rounded-md'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th className='py-3 px-[30px] text-sm font-bold border-r text-left text-gray-500'>Date</th>
                                        <th className='py-3 px-[30px] text-sm font-bold text-left text-gray-500'>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {egnyte.map(incident => {
                                    return(
                                        <tr key={incident.date}>
                                            <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>{incident.date}</td>
                                            <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>{incident.name}</td>
                                        </tr>
                                    )
                                   })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// todo: add pagination
// todo: apply filter if applicable
// todo: apply search if applicable
// todo: optimize view port to show recent pulls first