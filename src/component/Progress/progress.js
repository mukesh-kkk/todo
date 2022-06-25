
import React from "react";
import "./progress.css";
import tick from "../../assets/tick.svg";
import cross from "../../assets/cross.svg";
//example 
/* <Progress arr={[
      {stage: "Login", status: "done" },
      { stage: "Registers", status: "done" },
      { stage: "Welcome", status: "notdone" },
     { stage: "Welcome", status: "notdone" }
    ]}
       isClickable={true} //is clickable
        aclr="#0474ff"     //active color
       iclr="#979797"    //inactive color
     />  */

function Progress(props) {
  const { arr, aclr, iclr, isClickable } = props;
  const length = (window.innerWidth * .9 - (46 * arr.length)) / (arr.length - 1);

  //count done


  const [prog, setProg] = React.useState(arr);


  function handleClick(e) {


    let idx = parseInt(e.target.id.substr(8));

    if (prog[idx].status === "done") {
      console.log(idx);
      let temp = prog;
      for (var i = 0; i <= idx - 1; i++) {

        temp[i].status = "done";

      }
      for (var j = idx; j < prog.length; j++) {
        temp[j].status = "notdone"

      }

      setProg([...temp]);

      console.log(prog);
    } else {
      console.log(idx);
      let temp = prog;
      for (var k = 0; k <= idx; k++) {

        temp[k].status = "done";

      }

      setProg([...temp]);

      console.log(prog);
    }
  }

  

  return (<div className="progress-wrapper">
    <div className="tick-border">

      {prog.map((val, i, ar) => {
        return (<>
        
          <div className="tick-icon">
            {isClickable ? <div onClick={handleClick}><img id={`img-xyx-` + i} style={{ backgroundColor: val.status === "done" ? aclr : iclr }} src={val.status === "done" ? tick : cross} alt="done" />
            </div> :
              <div><img id={`imgkxyx-` + i} style={{ backgroundColor: val.status === "done" ? aclr : iclr, cursor: "default" }} src={val.status === "done" ? tick : cross} alt="done" />
              </div>
              
            }
            <p className="tick-text" style={{ color: val.status === "done" ? aclr : iclr }}>{val.stage}</p>
          </div>
          {i === arr.length - 1 ? null : <div className="stick" style={{ backgroundColor: ar[i + 1].status === "done" ? aclr : iclr, width: length }}>
            <div className="before" style={{ backgroundColor: val.status === "done" ? aclr : iclr }}></div>
            <div className="after" style={{ backgroundColor: ar[i + 1].status === "done" ? aclr : iclr }}></div>
          </div>}
        </>)
      })}
    </div>
  </div>)
}


export default Progress;