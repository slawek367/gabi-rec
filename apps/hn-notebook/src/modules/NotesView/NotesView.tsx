import Grid from '@mui/material/Grid';
import { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography } from '@mui/material';

import { GlobalState } from '../../app/store';
import { Table, HeadCellConfig } from '../../components';
import { SearchNotebook } from '../../types';
import { NotesModal } from './NotesModal';
import { deleteByTitle } from '../../state/notebooks/notebooks';

type SearchNotebookWithActions = SearchNotebook & { actions: string };

export const NotesView = () => {
  const { notebooks } = useSelector<
    GlobalState,
    { notebooks: SearchNotebook[] }
  >((state) => ({
    notebooks: state.notebooks.data,
  }));
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  const cellsConfig: HeadCellConfig<SearchNotebookWithActions> = useMemo(
    () => [
      {
        id: 'title',
        label: 'Title',
      },
      {
        id: 'creation_date',
        label: 'Created',
      },
      {
        id: 'search_results',
        label: 'Added search results count',
        render: (data) => data.search_results.length,
      },
      {
        id: 'actions',
        label: 'Actions',
        render: (data) => (
          <Button
            variant="contained"
            onClick={() => {
              dispatch(deleteByTitle({ title: data.title }));
            }}
            color="error"
          >
            Delete
          </Button>
        ),
      },
    ],
    []
  );

  return (
    <Grid container>
      <Grid
        item
        width={'100%'}
        sx={{
          bgcolor: '#ddd8d8',
          padding: '8px',
          textAlign: 'center',
        }}
        justifyContent={'center'}
      >
        <Typography>Your notebooks</Typography>
      </Grid>
      {notebooks.length ? (
        <Table
          rows={notebooks as unknown as SearchNotebookWithActions[]}
          cellsConfig={cellsConfig}
          rowsPerPage={5}
        />
      ) : null}
      <Grid item sx={{ margin: '8px' }}>
        <Button variant="contained" onClick={() => setModalOpen(true)}>
          Add new
        </Button>
      </Grid>
      <NotesModal
        open={isModalOpen}
        handleClose={() => setModalOpen(false)}
        notebooks={notebooks}
      />
    </Grid>
  );
};
