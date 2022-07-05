import React, { useEffect } from "react";
import "./Welcome.css";
import Btn from "../Btn/Btn.js";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Nav({isLogged,setLogged}) {
  

const handleLogOut=(e)=>{
 
  setLogged(false);
  console.log("logged out")
  

}

useEffect(()=>{});

  return (
    <>
      <div className="nav-wrapper">
        <div className="nav">
          <Link to ="/">
          <h1 className="logo">Worko</h1>
          </Link>
          <div className="btn-grp">
            
           {(isLogged)?(<><Link to="/">
              <Btn text={"Logout"} handle={handleLogOut} />
            </Link>
            <Link to="/todo">
            <Btn text={"Tasks"} />
          </Link></>):
          (<><Link to="/login">
              <Btn text={"Login"} type={"submit"} disp={"block"} />
            </Link>
            <Link to="/register">
              <Btn text={"SignUp"} />
            </Link></>
            )
            
            
            } 
            

          </div>
        </div>
      </div>
    </>
  );
}
