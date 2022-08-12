import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState()
  //get token from localStorage stored from userlogin
  const token = localStorage.getItem('token')

  useEffect(() => {
    //request dashboard endpoint with token from localStorage
    fetch('http://localhost:8081/dashboard', {
      headers: {
        Authorization: token
      }
    }).then((e) => {
      //if denied the token is no longer valid.... redirect user to login page(this is where refresh tokens come into play)
      if (e.status > 400) {
        localStorage.removeItem("token");
        return navigate('/login')
      } else return e.json()
    }).then((e) => e && setUserEmail(e.message))
  }, [])



  return (
    <div>
      <h1>DASHBOARD {userEmail}</h1>
    </div>
  )
}

export default Dashboard