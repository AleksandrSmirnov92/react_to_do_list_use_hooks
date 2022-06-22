/* eslint-disable array-callback-return */
import React from 'react';
import { Task } from '../task/task';
export const AllTask = ({ tasks, removeTask, filter, changeCheked }) => {
  const remove = (id) => {
    removeTask(id);
  };
  const checkbox = (id) => {
    changeCheked(id);
  };

  return tasks.map((x) => {
    if (filter === 'ALL') {
      return <Task x={x} remove={remove} checkbox={checkbox} />;
    }
    if (filter === 'ALLACTIVE' && x.changeColor === false) {
      return <Task x={x} remove={remove} checkbox={checkbox} />;
    }
    if (filter === 'ALLINACTIVE' && x.changeColor === true) {
      return <Task x={x} remove={remove} checkbox={checkbox} />;
    }
  });
};
