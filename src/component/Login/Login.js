import React from 'react'
import Btn from '../Btn/Btn'
import "./Login.css"

export default function Login() {
  return (
    <div>
      
        <form action="" method="post">
            <div className='form'>
              <p>Please Enter Login Credentials</p>
            <input type="email" placeholder='Enter Your Email' name="email"/>
           <input type="password" name="password" placeholder='Password'/>
           <Btn text={"Submit"} type="submit"/>
            </div>
        </form>
    </div>
  )
}
