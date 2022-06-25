import React from 'react'
import "./Btn.css";
export default function Btn(prop) {

   
  return (
    <div>

    <button className="btn-primary" type={prop.type} onClick={prop.handle} style={{display:prop.disp}}>
      {(prop.icon)?<img src={prop.icon} alt="add"/>:null} {prop.text}</button> 
    </div>
  )
}
