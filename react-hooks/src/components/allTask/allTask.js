import React from "react";
import {Task} from "../task/task"
export const AllTask = ({ addMessage, removeTask, filter, changeCheked}) => {
  let remove = (id) => {
    removeTask(id);
  };
  let checkbox = (id) => {
    // alert("стоит")
    changeCheked(id);
  };

  return addMessage.map((x, index) => {
    if (filter === "ALL") {
     console.log("render");
      return (
        <Task x = {x} remove = {remove} checkbox = {checkbox}/>
      );
    }
    if (filter === "ALLACTIVE" && x.checked === false) {
      return (
        <Task x = {x} remove = {remove} checkbox = {checkbox}/>
      );
    }
    if (filter === "ALLINACTIVE" && x.checked === true) {
      return (
        <Task x = {x} remove = {remove} checkbox = {checkbox}/>
      );
    }
  });
}





















   // <div key={x.id} className={`${AllTaskCSS.add_task_result1} 
        // ${
        //   x.changeColor
        //     ? AllTaskCSS.add_task_chacked_color
        //     : AllTaskCSS.add_task_result1
        // }`}>
        //   <span id={x.id} className={`${x.changeColor ? AllTaskCSS.add_task_result_text_t : AllTaskCSS.add_task_result_text}`}>
        //     {x.massage}
        //   </span>
        //   <div>
        //     <input id={x.id} type="checkbox" onClick={() => checkbox(x.id)} defaultChecked={x.checked ? true : false}/>
        //     <button
        //       id={x.id}
        //       className={AllTaskCSS.add_task_result_text_remove}
        //       onClick={() => {
        //         remove(x.id);
        //       }}
        //     >
        //       удалить
        //     </button>
        //   </div>
        // </div>