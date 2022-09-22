import React, { useEffect, useState } from 'react'

export default function OfficeData(){
    const [office, setOffice] = useState(false)
    async function getOfficeData(){
        const res = await fetch('http://localhost:8081/api/v1/services/office')
        const req = await res.json()
        setOffice(req.incidents)
    }
    useEffect(() => {
        getOfficeData()
    }, [])
    return(
        <div className='py-[120px] px-[100px] w-full h-full'>
            <div>
                {office.map(incident => {
                    return(
                        <div key={incident.date}>
                            <div>{incident.date}</div>
                            <div>{incident.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}