import React from 'react'
import "./Welcome.css";
import Nav from "./Nav"


export default function Welcome() {
  return (
    
    <>
    <Nav/>
    <div className="hi-msg">
        <p className="hi">Welcome!</p>
    </div>

    <div className='welcome-msg'>
        <p>Maximize your productivity with <br></br><span>Personalised</span> To-Do list.</p>
    </div>

    </>
  )
}
