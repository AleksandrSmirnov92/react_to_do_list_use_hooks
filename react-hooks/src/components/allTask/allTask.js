import React from "react"
import AllTaskCSS from "./allTask.module.css"
export const AllTask = () => {
   return (
      <div className={AllTaskCSS.add_task_result1}  >
            <span className={AllTaskCSS.add_task_result_text}>
               Message
            </span>
            <div>
              <input type="checkbox" />
              <button className={AllTaskCSS.add_task_result_text_remove} >
                удалить 
              </button>
            </div>
          </div>
        );
   
   
}