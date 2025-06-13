import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    if(!localStorage.getItem("token")){
        return navigate("/")
    }
    return (
    <div>
      Home
    </div>
  )
}

export default Home
