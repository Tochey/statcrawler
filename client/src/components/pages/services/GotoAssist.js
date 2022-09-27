import React, { useEffect, useState } from 'react'

export default function GotoAssistData(){
    const [gotoAssist, setGotoAssist] = useState(false)
    async function getGotoAssistData(){
        const res = await fetch('http://localhost:8081/api/v1/goToAssist')
        const req = res.json()
        setGotoAssist(req.incidents)
    }
    useEffect(() => {
        getGotoAssistData()
    }, [])
    return(
        <div className='py-[120px] px-[100px] w-full h-full'>
            <div>{gotoAssist.map(incident => {
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