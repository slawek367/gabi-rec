import { useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { SearchNotebook } from '../../types';
import { addNotebook } from '../../state/notebooks/notebooks';

interface NotesModalProps {
  open: boolean;
  handleClose: () => void;
  notebooks: SearchNotebook[];
}

const style = {
  position: 'absolute' as const,
  display: 'flex',
  flexFlow: 'column',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const NotesModal = ({
  open,
  handleClose,
  notebooks,
}: NotesModalProps) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const notebooksNames = useMemo(() => {
    return notebooks.map((notebook) => notebook.title);
  }, [notebooks]);

  const onChange = useCallback(
    (e) => {
      setError('');
      const val = e.target.value || '';
      setInput(val);
      if (val && notebooksNames.includes(val)) {
        setError('Notebook with that name already exists');
      }
    },
    [notebooksNames]
  );

  const onSave = useCallback(() => {
    dispatch(addNotebook(input));
    setInput('');
    handleClose();
  }, [input]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid container sx={style} spacing={1}>
        <Grid item>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new note
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            id="outlined-basic"
            placeholder="Input notes name"
            variant="outlined"
            size="small"
            onChange={onChange}
            value={input}
            error={!!error}
            helperText={error}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={onSave}
            sx={{ marginRight: '4px' }}
            disabled={!input || !!error}
          >
            Add
          </Button>
          <Button color="error" variant="contained" onClick={handleClose}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};
