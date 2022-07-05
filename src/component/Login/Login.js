import axios from 'axios';
import React from 'react'
import Btn from '../Btn/Btn'
import "./Login.css";
import { useState } from 'react';
import { Link ,useHistory,useNavigate} from 'react-router-dom';

export default function Login({setLogged}) {
  let navi=useHistory();
 let [swt,setSwt]=useState(true);

  function loginHandle(e){
    e.preventDefault();
    const email=e.target.email.value;
    const pass=e.target.password.value;
   
    axios
      .post(
        "https://api-nodejs-todolist.herokuapp.com/user/login",
        { email: email,password:pass },
        {
          headers: {
            
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        window.localStorage.setItem("worko_token",res.data.token);
        setLogged(true);
        navi.push("/todo");

      })
      .catch((err) => console.log(err));

      setSwt(!swt);
  }
  const handleLogin=()=>{

  }
  return (
    <div>
      
        <form action="" method="post" onSubmit={loginHandle}>
            <div className='form'>
              <p className='pelc'>Please Enter Login Credentials</p>
            <input type="email" placeholder='Enter Your Email' name="email"/>
           <input type="password" name="password" placeholder='Password'/>
           <div style={{height:"3em",width:"100%"}}></div>
           
           <Btn text={"Submit"} type="submit" handle={handleLogin} />
          {/* okg  f3 in satge-2*/}
            </div>
        </form>
    </div>
  )
}
