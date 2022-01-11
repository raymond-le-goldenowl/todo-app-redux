import { createSelector } from "@reduxjs/toolkit";

export const selectorTodoList = (state) => state.todoList;
export const selectorSearchText = (state) => state.filters.search;
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
        return priorities.length
          ? todo.name
              .toLowerCase()
              .trim()
              .includes(searchText.toLowerCase().trim()) &&
              priorities.includes(todo.priority)
          : todo.name
              .toLowerCase()
              .trim()
              .includes(searchText.toLowerCase().trim());
      }
      return priorities.length
        ? todo.name
            .toLowerCase()
            .trim()
            .includes(searchText.toLowerCase().trim()) &&
            (status === "Completed" ? todo.completed : !todo.completed) &&
            priorities.includes(todo.priority)
        : todo.name
            .toLowerCase()
            .trim()
            .includes(searchText.toLowerCase().trim()) &&
            (status === "Completed" ? todo.completed : !todo.completed);
    });
  }
);
