import React from 'react'
import "./Welcome.css";
import Btn from '../Btn/Btn.js';

export default function Nav(){
  return (
    <>
    <div className="nav-wrapper">
        <div className="nav">
            <h1 className="logo">Worko</h1>
           <div className='btn-grp'>
           <Btn text={"Login"} type={"submit"} disp={"block"}/>
            <Btn text={"SingUp"}/>
           </div>
        </div>
    </div></>
  )
}
