import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

interface AddTodoFormProps {
  onSubmit: (text: string) => void; // Define onSubmit prop
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (text.trim() !== '') {
      onSubmit(text); 
      setText('');
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={9}>
        <TextField
          label="Add New Todo"
          fullWidth
          value={text}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTodoForm;
