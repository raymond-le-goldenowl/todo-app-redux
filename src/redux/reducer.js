import { combineReducers } from "redux";
import filtersSlice from "../components/Filters/filtersSlice";
import todoListSlice from "../components/TodoList/todoListSlice";

const rootReducer = combineReducers({
  filters: filtersSlice.reducer,
  todoList: todoListSlice.reducer,
});

export default rootReducer;
