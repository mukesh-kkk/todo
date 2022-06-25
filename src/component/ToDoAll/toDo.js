import "./toDo.css";
import tick from "../../assets/tick.svg";
import cross from "../../assets/cross.svg";
import add from "../../assets/add.svg";
import edit from "../../assets/edit.svg";
import Btn from "../Btn/Btn";
import deletes from "../../assets/deletes.svg";
import save from "../../assets/save.svg";
import axios from "axios";

import React, { useState } from "react";

export default function ToDo() {
  const [detectEdit, setDetectEdit] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setDetectEdit(!detectEdit);
  };
  const deleteTask = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="new-task">
        <input type="text" placeholder="New Task" />
        <Btn icon={add} />
      </div>
      <div className="tasks">
        <div className="task">
          <p>Ok</p>
          <Btn icon={detectEdit ? edit : save} handle={handleClick} />
          <Btn icon={deletes} handle={deleteTask} />
        </div>
      </div>
    </>
  );
}
