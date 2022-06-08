import React, { useState } from "react"
import AllTaskCSS from "./allTask.module.css"
export const AllTask = (props) => {
   let [task, setTask] = useState(props.storeAlltask.alltask.task)
   return (
      task.map((x,index)=>{
         return (
            <div className={AllTaskCSS.add_task_result1}  >
            <span className={AllTaskCSS.add_task_result_text}>
               {x.massage}
            </span>
            <div>
              <input type="checkbox" />
              <button className={AllTaskCSS.add_task_result_text_remove} >
                удалить 
              </button>
            </div>
          </div>
         )
      })
        );
   
   
}