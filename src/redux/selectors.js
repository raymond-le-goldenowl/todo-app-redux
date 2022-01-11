import { createSelector } from "reselect";

export const selectorSearchText = (state) => state.filters.search;
export const selectorTodoList = (state) => state.todoList;
export const selectorFilterStatus = (state) => state.filters.status;
export const selectorPriority = (state) => state.filters.priorities;

export const todosRemainingSelector = createSelector(
  selectorTodoList,
  selectorFilterStatus,
  selectorSearchText,
  selectorPriority,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      if (status.toLowerCase().trim().includes("all")) {
        return todo.name
          .toLowerCase()
          .trim()
          .includes(searchText.toLowerCase().trim());
      }
      return (
        todo.name
          .toLowerCase()
          .trim()
          .includes(searchText.toLowerCase().trim()) &&
        (status === "Completed" ? todo.completed : !todo.completed)
      );
    });
  }
);
