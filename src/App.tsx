import React from 'react';
import { Container } from '@mui/material';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <h1>Todo List</h1>
      <TodoList />
    </Container>
  );
};

export default App;
