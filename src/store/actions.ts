// In actions.js

import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('todos/add', (text: string) => ({
  payload: { text },
}));

export const toggleTodo = createAction('todos/toggle', (id: number) => ({
  payload: { id },
}));

export const deleteTodo = createAction('todos/delete', (id: number) => ({
  payload: { id },
}));
