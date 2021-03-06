import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './contexts/todos.context';

export default function EditTodoForm({ id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const dispatch = useContext(DispatchContext);
  // console.log('EDIT FORM RENDER');
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'EDIT', id: id, newTask: value });
          reset();
          toggleEditForm();
          // this will change isEditing in the parent
        }}
        style={{ marginLeft: '1rem', width: '80%' }}
      >
        <TextField
          margin="normal"
          value={value}
          onChange={handleChange}
          fullWidth
          autoFocus
        />
      </form>
      <ListItemSecondaryAction>
        <IconButton
          onClick={() => {
            dispatch({ type: 'EDIT', id: id, newTask: value });
            // reset();
            toggleEditForm();
          }}
        >
          <CancelIcon aria-label="cancel" />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  );
}

// THREE WAYS TO SUBMIT
// add a button to save
// use event listner and press enter key
// or use form and submit
