import React from "react";
let store = {
  state: {
    alltask: {
      task: [
        { id: 1, massage: "hi" ,checked: false},
        { id: 2, massage: "How are you" ,checked: false},
        { id: 3, massage: "you" , checked: false},
        { id: 4, massage: "yo" ,checked: false},
        { id: 5, massage: "yo",checked: false },
      ],
      NewMessage: "",
    },

    counter: 0,
    filter: null,
  },
  getState() {
    return this.state;
  },
  addpost(e) {
    // debugger
    this.state.alltask.task.push(e)
    return this.state
  }
};

export default store