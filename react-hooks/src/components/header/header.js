import React from "react"
import HeaderCSS from "./header.module.css"

export const Header = () => {
   return(
      <header className={HeaderCSS.header}>
        
      <div className={HeaderCSS.header_wrapper}>
         <span className={HeaderCSS.header_span}>Осталось выполнить</span>
   
         <span className={HeaderCSS.header_span2}>0</span>
      </div>
   </header>
   )
}