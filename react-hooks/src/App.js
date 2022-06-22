import React, { useState, useEffect } from 'react';

import AppCSS from './App.module.css';
import { Header } from './components/header/header';
import { AddTaskMenu } from './components/addTaskMenu/addTaskMenu';
import { Filter } from './components/filter/filter';
import { AllTask } from './components/allTask/allTask';

const getCounterFromLocalStorage = () => {
  const counterLocalStorage = JSON.parse(localStorage.getItem('counter'));
  if (counterLocalStorage) {
    return JSON.parse(localStorage.getItem('counter'));
  } else {
    return 0;
  }
};
const getTasksFromLocalStorage = () => {
  const tasksLocalStorage = JSON.parse(localStorage.getItem('todo'));
  if (tasksLocalStorage) {
    return JSON.parse(localStorage.getItem('todo'));
  } else {
    return [];
  }
};

function App() {
  const [tasks, setTasks] = useState(getTasksFromLocalStorage());
  const [counter, setCounter] = useState(getCounterFromLocalStorage());
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counter));
    localStorage.setItem('todo', JSON.stringify(tasks));
    localStorage.setItem('Filter', JSON.stringify(filter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks, filter]);

  const addTask = (input) => {
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
  //
  const removeTask = (id) => {
    setTasks([...tasks.filter((addMessage) => addMessage.id !== id)]);
    for (const item of tasks) {
      if (item.id === id && item.changeColor === false) {
        setCounter(counter - 1);
        break;
      }
    }
  };
  const changeFilter = (value) => {
    setFilter(value);
  };

  const changeCheked = (id) => {
    setTasks([
      ...tasks.map((item) => {
        if (item.id === id) {
          item.changeColor = !item.changeColor;
          if (item.changeColor) {
            setCounter(counter - 1);
          } else {
            setCounter(counter + 1);
          }
        }
        return item;
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
