import React from 'react';
import "./SignUp.css";
import Btn from "../Btn/Btn"

export default function SignUp() {
  return (
    <div className='sign-up'>
      <form action="" method="post">
            <div className='form'>
              <p style={{textAlign:"center"}}>Please Enter Sign Up Detials</p>
              <input type="text" placeholder='Enter Your Name' name="name" autocomplete="off"/>
            <input type="email" placeholder='Enter Your Email' name="email" autocomplete="off"/>
           <input type="password" name="password" placeholder='Password' autocomplete="off"/>
           <input type="number" name="age"placeholder='Age'autocomplete="off"/>
           <Btn text={"Submit"} type="submit"/>
            </div>
        </form>
    </div>
  )
}
