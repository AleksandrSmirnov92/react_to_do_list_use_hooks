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
  let [tasks, setTasks] = useState(getTasksFromLocalStorage());
  let [counter, setCounter] = useState(getCounterFromLocalStorage());
  let [filter, setFilter] = useState('ALL');

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counter));
    localStorage.setItem('todo', JSON.stringify(tasks));
    localStorage.setItem('Filter', JSON.stringify(filter));
  }, [tasks, filter]);

  let addTask = (input) => {
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        {
          id: Math.random(),
          massage: input,
          changeColor: false,
        },
      ];
    });
    setCounter(counter + 1);
  };

  let removeTask = (id) => {
    setTasks([...tasks.filter((addMessage) => addMessage.id !== id)]);
    for (let item of tasks) {
      if (item.id === id && item.changeColor === false) {
        setCounter(counter - 1);
        break;
      }
    }
  };
  let changeFilter = (value) => {
    setFilter((filter = value));
  };

  let changeCheked = (id) => {
    setTasks([
      ...tasks.map((item) => {
        if (item.id === id) {
          item.changeColor = !item.changeColor;
          if (item.changeColor) {
            setCounter(counter - 1);
          } else {
            setCounter(counter + 1);
          }
          return item;
        } else {
          return item;
        }
      }),
    ]);
  };
  return (
    <div className={`${AppCSS.App} ${AppCSS.AppWrapper}`}>
      <Header counter={counter} />
      <AddTaskMenu addTaskk={addTask} />
      <Filter changeFilter={changeFilter} />
      <AllTask
        tasks={tasks}
        removeTask={removeTask}
        filter={filter}
        changeCheked={changeCheked}
      />
    </div>
  );
}

// localStorage.clear();
export default App;
