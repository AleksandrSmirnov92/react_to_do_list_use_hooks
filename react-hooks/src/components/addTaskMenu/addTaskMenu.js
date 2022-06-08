import { getSelectionRange } from "@testing-library/user-event/dist/utils"
import React, { useRef, useState , useEffect} from "react"
import AddTaskCSS from "./addTaskMenu.module.css"


export const AddTaskMenu = (props) => {
  const refText = useRef()
 let [input,setinput] = useState("")
 const taskText = () => {
  setinput(refText.current.value)
  }
 const addTask = () => {
   props.setStore([...props.getStore,{id: Math.random(), massage: input, checked: false }])
   setinput('')
 }
   return(
     
         <div className={AddTaskCSS.add_task}>
           <h1 className={AddTaskCSS.add_task_text}>Добавить задачу</h1>
           <div className={AddTaskCSS.add_task_input_and_button}>
             <input
             ref = {refText}
               type="text"
               className={AddTaskCSS.add_task_input} 
               onChange= {taskText} value={input}
               placeholder="Добавить задачу"

             />
             <button className={AddTaskCSS.button_add}>
               <span className={AddTaskCSS.button_add_text} onClick={addTask}>Добавить</span>
             </button>
           </div>
         </div>
       );

}