// ACTION CREATORS

export const addTodo = (data) => ({
  type: "todoList/addTodo",
  payload: data,
});

export const toggleTodoStatus = (data) => ({
  type: "todoList/toggleTodoStatus",
  payload: data
});

export const searchFilterChange = (data) => ({
  type: "filters/searchFilterChange",
  payload: data,
});

export const statusFilterChange = (data) => ({
  type: "filters/statusFilterChange",
  payload: data,
});

export const priorityFilterChange = (data) => ({
  type: "filters/priorityFilterChange",
  payload: data,
});
