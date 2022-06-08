import React from "react"
import AddTaskCSS from "./addTaskMenu.module.css"


export const AddTaskMenu = () => {
   return(
     
         <div className={AddTaskCSS.add_task}>
           <h1 className={AddTaskCSS.add_task_text}>Добавить задачу</h1>
           <div className={AddTaskCSS.add_task_input_and_button}>
             <input
               type="text"
               className={AddTaskCSS.add_task_input}
             />
             <button className={AddTaskCSS.button_add}>
               <span className={AddTaskCSS.button_add_text}>Добавить</span>
             </button>
           </div>
         </div>
       );

}