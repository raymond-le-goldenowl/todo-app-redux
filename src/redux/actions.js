// ACTION CREATORS

export const addTodo = (data) => ({
  type: "todoList/addTodo",
  payload: data,
});

export const toggleTodoStatus = (id) => ({
  type: "todoList/toggleTodoStatus",
  payload: id
});

export const deleteTodo = (id) => ({
  type: "todoList/deleteTodo",
  payload: id,
});

export const searchFilterChange = (text) => ({
  type: "filters/searchFilterChange",
  payload: text,
});

export const statusFilterChange = (status) => ({
  type: "filters/statusFilterChange",
  payload: status,
});

export const priorityFilterChange = (priorities) => ({
  type: "filters/priorityFilterChange",
  payload: priorities,
});
