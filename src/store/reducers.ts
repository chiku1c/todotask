import { createReducer } from '@reduxjs/toolkit';
import { addTodo, toggleTodo, deleteTodo } from './actions';
import { TodosState } from './types'; // Import the TodosState interface

const initialState: TodosState = {
  todos: []
};

const todoReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(addTodo, (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        completed: false
      };
      state.todos.push(newTodo);
    })
    .addCase(toggleTodo, (state, action) => {
      const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (todoIndex !== -1) {
        state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
      }
    })
    .addCase(deleteTodo, (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    })
);

export default todoReducer;
