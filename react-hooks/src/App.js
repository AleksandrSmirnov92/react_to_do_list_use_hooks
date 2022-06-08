import React, { useState } from 'react';
import store from "./store/store"
import AppCSS from './App.module.css';
import {Header} from "./components/header/header"
import {AddTaskMenu} from "./components/addTaskMenu/addTaskMenu"
import {Filter} from "./components/filter/filter"
import {AllTask} from "./components/allTask/allTask"
function App() {
  let [getStore,setStore] = useState(store.getState())
    // setStore(store.addpost())
  return (
    <div className={`${AppCSS.App} ${AppCSS.AppWrapper}`}>
     <Header/>
     <AddTaskMenu addpost = {store.addpost.bind(store)} />
     <Filter/>
     <AllTask storeAlltask = {getStore}/>
    </div>
  );
}

export default App;
