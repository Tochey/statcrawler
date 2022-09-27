import React, { useEffect, useState } from 'react'

export default function NotionService(){

    const [notion, setNotion] = useState([])
    async function getNotionData(){
        const res = await fetch('http://localhost:8081/api/v1/services/notion')
        const req = await res.json()
        setNotion(req.incidents)
    }
    useEffect(() => {
        getNotionData()
    }, [])
    return(
        <div className='py-[120px] px-[100px] w-full h-full'>
            <div>
                {notion.map(incident => {
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