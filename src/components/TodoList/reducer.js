const initialState = [
  { id: 1, name: "Eat", completed: true, priority: "Medium" },
  { id: 2, name: "Code", completed: true, priority: "High" },
  { id: 3, name: "Sleep", completed: false, priority: "Low" },
];

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      return state.map((todo, index) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todoListReducer;
