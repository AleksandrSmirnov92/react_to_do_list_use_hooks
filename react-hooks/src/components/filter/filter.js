import React, { createRef } from "react";
import FilterCSS from "./filter.module.css"
export const Filter = ({changeFilter}) => {
   let valuee = React.createRef()
   let change = () => {
      changeFilter(valuee.current.value)
      // alert(`значение +${ valuee.current.value}`)
   }
   return(
      <div className={FilterCSS.filter_block}>
      <select ref={valuee} onChange={change}  className={FilterCSS.filter} defaultValue={'DEFAULT'} >
         <option id="1" value="ALL" selected>Выбрать все </option>
         <option id="2"  value={"ALLACTIVE"} > Выбрать активные </option>
         <option id="3"  value={"ALLINACTIVE"} >Выбрать законченные</option>
      </select>
      
   </div>
   )
}