import { combineReducers } from "redux";
import filtersReducer from "../components/Filters/reducer";
import todoListReducer from "../components/TodoList/reducer";

// const rootReducer = (state = {}, action) => ({
//   filters: filtersReducer(state.filters, action),
//   todoList: todoListReducer(state.todoList, action),
// });

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;
