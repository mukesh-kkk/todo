import "./App.css";
import Nav from "./component/Welcome/Nav.js";
// import Feature from './component/Feature.js
import Welcome from "./component/Welcome/Welcome.js";
import Login from "./component/Login/Login";
import SignUp from "./component/SignUp/SignUp";
import ToDo from "./component/ToDoAll/toDo.js";
import {  Switch, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLogged,setLogged]=useState(false);
  const [user,setUser]=useState("Hello");
  return (
    
      <div className="wrapper">
        <Nav  isLogged={isLogged} setLogged={setLogged}/>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/login">
            <Login setLogged={setLogged} />
          </Route> 
          <Route  path="/register">
            <SignUp   setLogged={setLogged} setUser={setUser}/>
          </Route>
          <Route  path="/todo">
          <ToDo  user={user}/>
          </Route>
          
        </Switch>
      </div>
    
  );
}

export default App;
