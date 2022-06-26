import "./toDo.css";
import tick from "../../assets/tick.svg";
import cross from "../../assets/cross.svg";
import add from "../../assets/add.svg";
import edit from "../../assets/edit.svg";
import Btn from "../Btn/Btn";
import deletes from "../../assets/deletes.svg";
import save from "../../assets/save.svg";
import axios from "axios";
import React, { useEffect, useState ,useRef} from "react";

export default function ToDo({user}) {
  //hooks sections-_--->

  let [d, setD] = useState([]);
  
  

  ///functions --->


  
  // deleting tasks
  const deleteTask = (e) => {
    e.preventDefault();
    let nd = e.target.id.slice(3);
    document.getElementById("abc" + nd).style.display = "none";
    axios
      .delete("https://api-nodejs-todolist.herokuapp.com/task/" + nd, {
        headers: {
          Authorization: window.localStorage.getItem("worko_token"),
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setD([...d]);
      })
      .catch((err) => console.log(err));
  };

  //getting all taksks
  useEffect(() => {
    axios
      .get("https://api-nodejs-todolist.herokuapp.com/task", {
        headers: {
          Authorization: window.localStorage.getItem("worko_token"),
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setD(res.data.data.reverse());
       console.log(res);
      })
      .catch((err) => console.log(err));
  }, [d]);

  // adding new tasks
  const addNewTask = (e) => {
    e.preventDefault();
    let nda = e.target.newtask.value;
    axios
      .post(
        "https://api-nodejs-todolist.herokuapp.com/task",
        { description: nda },
        {
          headers: {
            Authorization: window.localStorage.getItem("worko_token"),
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => console.log(err));
  };

  

  return (
    <>
      
      <form action="" method="" id="rsxpskls" onSubmit={addNewTask}>
        <div className="new-task">
          <input type="text" placeholder="New Task" name="newtask" />
          <Btn icon={add} type="submit" />
        </div>
      </form>
     <div    className="your-task-div"> <p className="your-task">{user}, your tasks :</p></div>
      <div className="tasks">
        
        {d.map((e, i) => {
          return (
            <div className="task" key={e._id} id={"abc" + e._id}>
              <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}><div className="dot"></div><p>{e.description}</p></div>
              
              <Btn icon={deletes} handle={deleteTask} id={"123" + e._id} />
            </div>
          );
        })}
      </div>
    </>
  );
}
