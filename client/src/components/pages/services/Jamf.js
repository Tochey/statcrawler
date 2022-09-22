import React, { useEffect, useState } from 'react'

export default function JamfData(){
    const [jamf, setJamf] = useState(false)
    async function getJamfData(){
        const res = await fetch('http://localhost:8081/api/v1/jamf')
        const req = await res.json()
        setJamf(req.incidents)
    }
    useEffect(() => {
        getJamfData()
    }, [])
    return(
        <div className='py-[120px] px-[100px] w-full h-full'>
            <div>
                {jamf.map(incident => {
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