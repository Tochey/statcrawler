import React, { useState, useEffect} from 'react'

export default function EgnyteDataModal(){

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
        <div className="py-[120px] px-[100px] w-full h-full">
            <div>
                {egnyte.map(incident => {
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