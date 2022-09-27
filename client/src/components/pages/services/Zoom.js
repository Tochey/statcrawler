import React, { useEffect, useState } from 'react'

export default function ZoomData(){

    const [zoom, setZoom] = useState(false)
    async function getZoomData (){
        const res = await fetch ('http://localhost/api/v1/services/zoom')
        const req = await res.json()
        setZoom(req.incidents)
    }
    useEffect(() => {
        getZoomData()
    }, [])
    return(
        // todo: change fetched data layout
        <div className='py-[120px] px-[100px] w-full h-full'>
            <div>
                {zoom.map(incident => {
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