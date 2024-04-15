import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import { addTodo } from '../store/actions';
import { RootState } from '../store';

// Styled components
const TodoListContainer = styled.div`
  margin-top: 20px;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  return (
    <TodoListContainer>
      <AddTodoForm onSubmit={handleAddTodo} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
