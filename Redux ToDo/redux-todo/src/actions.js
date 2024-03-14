export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

let nextTodoId = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    text,
    completed: false,
  },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id,
});
