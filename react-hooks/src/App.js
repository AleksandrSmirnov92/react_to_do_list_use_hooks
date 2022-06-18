import React, { useState, useEffect, useMemo } from 'react';

import AppCSS from './App.module.css';
import { Header } from './components/header/header';
import { AddTaskMenu } from './components/addTaskMenu/addTaskMenu';
import { Filter } from './components/filter/filter';
import { AllTask } from './components/allTask/allTask';

const getCounterFromLocalStorage = () => {
  let counterLocalStorage = JSON.parse(localStorage.getItem('counter'));
  if (counterLocalStorage) {
    return JSON.parse(localStorage.getItem('counter'));
  } else {
    return 0;
  }
};
const getTasksFromLocalStorage = () => {
  let tasksLocalStorage = JSON.parse(localStorage.getItem('todo'));
  if (tasksLocalStorage) {
    return JSON.parse(localStorage.getItem('todo'));
  } else {
    return [];
  }
};

function App() {
  let allFilter = 'ALL';
  let checked = false;

  let [tasks, setTasks] = useState(getTasksFromLocalStorage());
  let [counter, setCounter] = useState(getCounterFromLocalStorage());

  let [filter, setFilter] = useState(allFilter);
  let [x, setx] = useState(0);

  localStorage.setItem('counter', JSON.stringify(counter));
  useEffect(() => {
    setCounter((counter = tasks.length));
    localStorage.setItem('todo', JSON.stringify(tasks));
  }, [tasks]);
  let addTask = (input) => {
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        {
          id: Math.random(),
          massage: input,
          checked: checked,
          changeColor: false,
        },
      ];
    });
    localStorage.setItem('counter', JSON.stringify(counter));
  };

  let removeTask = (id) => {
    setTasks([...tasks.filter((addMessage) => addMessage.id !== id)]);
    for (let item of tasks) {
      if (item.id === id && item.changeColor === false) {
        setCounter(counter - 1);
        localStorage.setItem('counter', JSON.stringify(counter));
        break;
      }
    }
    console.log(tasks);
  };
  let changeFilter = (value) => {
    setFilter((filter = value));
    localStorage.setItem('Filter', JSON.stringify(filter));
  };

  let changeCheked = (id) => {
    let p = new Promise((resolve, reject) => {
      for (let element of tasks) {
        if (element.id === id) {
          element.changeColor = !element.changeColor;
          resolve();
          if (element.changeColor) {
            setCounter(counter - 1);
          } else {
            setCounter(counter + 1);
          }
        }
      }
    });

    p.then(() => {
      for (let element of tasks) {
        if (element.id === id) {
          setTimeout(() => {
            element.checked = !element.checked;
            setx(x + 1);
            // setaddMessage([...addMessage])
            localStorage.setItem('todo', JSON.stringify(tasks));
          }, 1000);
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
    localStorage.setItem('todo', JSON.stringify(tasks));
  };

  return (
    <div className={`${AppCSS.App} ${AppCSS.AppWrapper}`}>
      <Header counter={counter} />
      <AddTaskMenu addTaskk={addTask} />
      <Filter changeFilter={changeFilter} />
      <AllTask
        addMessage={tasks}
        removeTask={removeTask}
        filter={filter}
        changeCheked={changeCheked}
      />
    </div>
  );
}

localStorage.clear();
export default App;
