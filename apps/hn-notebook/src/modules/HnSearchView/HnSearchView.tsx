import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

import { Table, HeadCellConfig } from '../../components';
import { SearchResult } from '../../types';
import { useHnSearch } from '../../components/HnSearchInput/useHnSearch';
import { Typography } from '@mui/material';
import { QueryErrorResetBoundary } from 'react-query';

const cellsConfig: HeadCellConfig<SearchResult> = [
  {
    id: 'objectID',
    label: 'Object id',
  },
  {
    id: 'author',
    label: 'HN Author',
  },
  {
    id: 'points',
    label: 'Karma',
  },
  {
    id: 'url',
    label: 'Url',
  },
  {
    id: 'created_at',
    label: 'Creation date',
  },
  {
    id: '_tags',
    label: 'Tags',
    render: (data) => data._tags.join(', '),
  },
];

export const HnSearchView = () => {
  const { query } = useParams();
  const { isLoading, isFetching, data, refetch } = useHnSearch(query || '');

  useEffect(() => {
    if (!data) {
      refetch();
    }
  }, [data]);

  if (isLoading || isFetching) {
    return (
      <Grid
        container
        height={150}
        justifyContent={'center'}
        alignContent={'center'}
      >
        <CircularProgress />
      </Grid>
    );
  }

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
        <Typography>Search results for: {query}</Typography>
      </Grid>
      <Table key={query} rows={data || []} cellsConfig={cellsConfig} />
    </Grid>
  );
};
