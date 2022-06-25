
import './App.css';
import Nav from './component/Welcome/Nav.js';
// import Feature from './component/Feature.js
import Welcome from "./component/Welcome/Welcome.js"
import  Login from "./component/Login/Login";
import SignUp from "./component/SignUp/SignUp";
import ToDo from "./component/ToDoAll/toDo.js"


function App() {
  return (
    <div className="wrapper">
    <Nav/>
    
    <ToDo/>
    </div>
  );
}

export default App;

