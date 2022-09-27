import React, { useEffect, useState } from 'react'

export default function SlackData(){

    const [slack, setSlack] = useState(false)
    async function getSlackData (){
        const res = await fetch('http://localhost/api/v1/slack')
        const req = await res.json()
        setSlack(req.incidents)
    }
    useEffect(() => {
        getSlackData()
    }, [])
    return(
        <div className='py-[120px] px-[100px] w-full h-full'>
            <div>
                {slack.map(incident => {
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

// {incident.title}

// todo: remember that the api returns name, date and title