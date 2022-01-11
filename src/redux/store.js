import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../components/Filters/reducer";
import todoListReducer from "../components/TodoList/reducer";

const store = configureStore({
  reducer: {
    filters: filtersReducer.reducer,
    todoList: todoListReducer.reducer
  }
})


export default store;