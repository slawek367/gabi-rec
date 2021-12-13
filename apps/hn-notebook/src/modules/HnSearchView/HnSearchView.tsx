import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

import { Table, HeadCellConfig } from '../../components';
import { SearchResult } from '../../types';
import { useHnSearch } from '../../components/HnSearchInput/useHnSearch';

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
  const { isLoading, data, refetch } = useHnSearch(query || '');

  useEffect(() => {
    if (!data) {
      refetch();
    }
  }, [data]);

  if (isLoading) {
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

  return <Table rows={data || []} cellsConfig={cellsConfig} />;
};
