import React from "react"
import AllTaskCSS from "./allTask.module.css"
export const AllTask = ({addMessage,removeTask,filter,changeCheked}) => {

   
  let remove = (id) => {
    removeTask(id) 
     }
  let checkbox = () => {
    // alert("стоит")
    changeCheked()
  }
  
   
   return (
      addMessage.map((x,index)=>{
        if (filter === "ALL") {
         return (
            <div key={x.id} className={AllTaskCSS.add_task_result1}  >
            <span id = {x.id} className={AllTaskCSS.add_task_result_text}>
               {x.massage}
            </span>
            <div>
              <input id = {x.id} type="checkbox" onClick={checkbox}/>
              <button id={x.id} className={AllTaskCSS.add_task_result_text_remove} onClick = {() => {remove(x.id)}}>
                удалить 
              </button>
            </div>
          </div>
         )
        }
        if (filter === "ALLACTIVE" && x.checked === false) {
          return (
            <div key={x.id} className={AllTaskCSS.add_task_result1}  >
            <span id = {x.id} className={AllTaskCSS.add_task_result_text}>
               {x.massage}
            </span>
            <div>
              <input id = {x.id} type="checkbox"  onClick={checkbox}/>
              <button id={x.id} className={AllTaskCSS.add_task_result_text_remove} onClick = {() => {remove(x.id)}}>
                удалить 
              </button>
            </div>
          </div>
         )
        }
        if (filter === "ALLINACTIVE" && x.checked === true) {
          return (
            <div key={x.id} className={AllTaskCSS.add_task_result1}  >
            <span id = {x.id} className={AllTaskCSS.add_task_result_text}>
               {x.massage}
            </span>
            <div>
              <input id = {x.id} type="checkbox"  onClick={checkbox}/>
              <button id={x.id} className={AllTaskCSS.add_task_result_text_remove} onClick = {() => {remove(x.id)}}>
                удалить 
              </button>
            </div>
          </div>
         )
        }
      })
        );
   
   
}