import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../container/routes';

const Dashboard = () => {
  let navigate=useNavigate();
  let [user,setUser]=useState("")
  useEffect(()=>{
    let token=localStorage.getItem("token");
    if(!token){
      navigate('/login');
    }
    async function fetchData(){
      let data=await getUser(token);
      setUser(data);
    }
    fetchData();
  },[])
  return (
    <div>
      {user && (
        <div>
          <h1>{user.name}</h1>
          <h4>{user.email}</h4>
        </div>
      )

      }
    </div>
  )
}

export default Dashboard