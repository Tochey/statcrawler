import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

export default function EmailVerificationPage(){
    const [validUrl, setValidUrl] = useState(false);
    const params = useParams();

    useEffect(() => {
        const verifyEmailUrl = async () => {
            try{
                const url = `http://localhost:8081/api/v1/user/${params.id}/token/${params.token}`;
                const { data } = await axios.get(url);
                console.log(data)
                setValidUrl(true);
            } catch(error){
                console.log(error)
                setValidUrl(false)
            }
        }
        verifyEmailUrl()
    }, [params])
    return(
       <Fragment>
        <div className='w-full text-black font-medium bg-white'>
        {validUrl ? (
            <div className=''>
                {/* style page properly */}
                <h2>welcome, email has been verified successfully</h2>
                <Link to="/login">
                    <button className='text-white mt-4 bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-[235px] py-2.5 text-center'>
                        proceed to login
                    </button>
                </Link>
            </div>
        ) : (
            <h2> 404 NOT FOUND/DOES NOT EXIST</h2>
        )}
        </div>
       </Fragment>
    )
}