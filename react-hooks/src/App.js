import React, { useState,useEffect } from 'react';
import store from "./store/store"
import AppCSS from './App.module.css';
import {Header} from "./components/header/header"
import {AddTaskMenu} from "./components/addTaskMenu/addTaskMenu"
import {Filter} from "./components/filter/filter"
import {AllTask} from "./components/allTask/allTask"
function App() {
  let storage = store.state.alltask.task
  if (localStorage.getItem("todo")) {
    storage = JSON.parse(localStorage.getItem("todo"));
  }
  let [getStore,setStore] = useState(storage)
 useEffect(()=> {
  localStorage.setItem("todo", JSON.stringify(getStore))
 },[getStore])
  return (
    <div className={`${AppCSS.App} ${AppCSS.AppWrapper}`}>
     <Header/>
     <AddTaskMenu setStore= {setStore} getStore={getStore}/>
     <Filter/>
     <AllTask storeAlltask = {getStore}/>
    </div>
  );
}
// localStorage.clear()
export default App;
