import { Table, HeadCellConfig } from '../../components';
import { SearchResult } from '../../types';

const data: SearchResult[] = [
  {
    id: 1,
    author: 'Some author',
    karma_points: 10,
    url: 'www.test.pl',
    creation_date: '2020',
    hn_tags: ['tag1', 'tag2'],
    search_query_id: 'query=test',
  },
  {
    id: 2,
    author: 'Some author2',
    karma_points: 100,
    url: 'www.test2.pl',
    creation_date: '2021',
    hn_tags: ['tag1', 'tag2'],
    search_query_id: 'query=test2',
  },
  {
    id: 3,
    author: 'Some author2',
    karma_points: 100,
    url: 'www.test2.pl',
    creation_date: '2021',
    hn_tags: ['tag1', 'tag2'],
    search_query_id: 'query=test2',
  },
];

const cellsConfig: HeadCellConfig<SearchResult> = [
  {
    id: 'id',
    label: 'Object id',
  },
  {
    id: 'author',
    label: 'HN Author',
  },
  {
    id: 'karma_points',
    label: 'Karma',
  },
  {
    id: 'url',
    label: 'Url',
  },
  {
    id: 'creation_date',
    label: 'Creation date',
  },
  {
    id: 'hn_tags',
    label: 'Tags',
  },
  {
    id: 'search_query_id',
    label: 'Query ID',
  },
];

export const HnSearchView = () => {
  return <Table rows={data} cellsConfig={cellsConfig} />;
};
