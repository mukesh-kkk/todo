import React from "react";
import "./SignUp.css";
import Btn from "../Btn/Btn";
import axios from "axios";
import { Link ,useHistory} from "react-router-dom";
export default function SignUp({setLogged,setUser}) {
  const naji=useHistory();
  async function handleSignup(e) {
           e.preventDefault();
setUser(e.target.name.value);
      axios.post(
        "https://api-nodejs-todolist.herokuapp.com/user/register",
        {
          name: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value,
          age: e.target.age.value
        },
        {
          headers: {
           
            "Content-Type": "application/json"
          },
        }
      )
      .then((res) => {
        
        console.log(res);
        localStorage.setItem("worko_token",res.data.token);

         setLogged(true);
         naji.push("/todo");
      })
      .catch((err) => console.log(err));


  }
  return (
    <div className="sign-up">
      <form action="" method="post" onSubmit={handleSignup}>
        <div className="form">
          <p style={{ textAlign: "center" }}>Please Enter Sign Up Detials</p>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            autoComplete="off"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
           
          />
         
         <Btn text={"Submit"} type="submit" />
         
        </div>
      </form>
    </div>
  );
}
