import React from "react";
import FilterCSS from "./filter.module.css"
export const Filter = () => {
   return(
      <div className={FilterCSS.filter_block}>
      <select className={FilterCSS.filter} defaultValue={'DEFAULT'} >
         <option id="1" value="all" selected>Выбрать все </option>
         <option id="2"  value={"/ALLACTIVE"} > Выбрать активные </option>
         <option id="3"  value={"/ALLINACTIVE"} >Выбрать законченные</option>
      </select>
      
   </div>
   )
}