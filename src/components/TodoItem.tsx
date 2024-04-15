import React from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, IconButton, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Todo } from '../store/types';
import { deleteTodo, toggleTodo } from '../store/actions';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id)); // Uncomment to dispatch toggleTodo action
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id)); // Uncomment to dispatch deleteTodo action
  };

  return (
    <Grid container alignItems="center">
      <Grid item xs={1}>
        <Checkbox
          checked={todo.completed}
          onChange={handleToggle}
          color="primary"
        />
      </Grid>
      <Grid item xs={9}>
        <Typography
          variant="body1"
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default TodoItem;
