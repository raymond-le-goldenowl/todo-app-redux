import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Eat", completed: true, priority: "Medium" },
    { id: 2, name: "Code", completed: true, priority: "High" },
    { id: 3, name: "Sleep", completed: false, priority: "Low" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
  },
});