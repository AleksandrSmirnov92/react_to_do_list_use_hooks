import React, { useState, useEffect, useMemo } from "react";
import store from "./store/store";
import AppCSS from "./App.module.css";
import { Header } from "./components/header/header";
import { AddTaskMenu } from "./components/addTaskMenu/addTaskMenu";
import { Filter } from "./components/filter/filter";
import { AllTask } from "./components/allTask/allTask";
function App() {
  let storage = [];
  let count = 0;
  let allFilter = "ALL";
  let checked = false;

  if (localStorage.getItem("todo")) {
    storage = JSON.parse(localStorage.getItem("todo"));
  }
  if (localStorage.getItem("counter")) {
    count = JSON.parse(localStorage.getItem("counter"));
  }
  let [addMessage, setaddMessage] = useState(storage);
  let [counter, setCounter] = useState(count);
  let [filter, setFilter] = useState(allFilter);
  let [x,setx] = useState(0)

  localStorage.setItem("todo", JSON.stringify(addMessage));
  localStorage.setItem("counter", JSON.stringify(counter));
 console.log(x)
  let addTask = (input) => {
    setaddMessage([
      ...addMessage,
      {
        id: Math.random(),
        massage: input,
        checked: checked,
        changeColor: false,
      },
    ]);
    setCounter(counter + 1);
    localStorage.setItem("todo", JSON.stringify(addMessage));
    localStorage.setItem("counter", JSON.stringify(counter));
  };

  let removeTask = (id) => {
    setaddMessage([
      ...addMessage.filter(
        (addMessage) => addMessage.id !== id,
        localStorage.setItem("todo", JSON.stringify(addMessage))
      ),
    ]);
    for (let item of addMessage) {
      if (item.id === id && item.changeColor === false) {
        setCounter(counter - 1);
        localStorage.setItem("counter", JSON.stringify(counter));
        break;
      }
    }
    console.log(addMessage);
  };
  let changeFilter = (value) => {
    setFilter((filter = value));
    localStorage.setItem("Filter", JSON.stringify(filter));
  };

  let changeCheked = (id) => {
    let p = new Promise((resolve, reject) => {
      for (let element of addMessage) {
        if (element.id === id) {
          element.changeColor = !element.changeColor;
          resolve()
          if (element.changeColor) {
            setCounter(counter - 1);
          } else {
            setCounter(counter + 1);
          }
        }
      }
    });

    p.then(() => {
      for(let element of addMessage) {
        if (element.id === id) {
                setTimeout(()=>{
                  element.checked = !element.checked
                  setx(x + 1)
                  // setaddMessage([...addMessage])
                  localStorage.setItem("todo", JSON.stringify(addMessage))
                },1000)
                
                
              
        }
      }
    });

    //  for(let element of addMessage) {
    // if (element.id === id) {
    //   let p = new Promise((resolve, reject) => {
    //     setTimeout(()=>{
    //       element.checked = !element.checked
    //       setaddMessage([...addMessage])
    //       localStorage.setItem("todo", JSON.stringify(addMessage))
    //       // console.log (addMessage)
    //      resolve()
    //     },1000)
    //    })
    // element.changeColor = !element.changeColor
    // if (element.changeColor ) {
    //   setCounter(counter - 1)
    // }
    // else {
    //   setCounter(counter +1)
    // }

    // }
    // };
    localStorage.setItem("todo", JSON.stringify(addMessage));
  };

  return (
    <div className={`${AppCSS.App} ${AppCSS.AppWrapper}`}>
      <Header counter={counter} />
      <AddTaskMenu addTaskk={addTask} />
      <Filter changeFilter={changeFilter} />
      <AllTask
        addMessage={addMessage}
        removeTask={removeTask}
        filter={filter}
        changeCheked={changeCheked}
      />
    </div>
  );
}

localStorage.clear();
export default App;
