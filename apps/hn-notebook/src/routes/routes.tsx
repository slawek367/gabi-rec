import { Routes as RoutesDOM, Route, Link } from 'react-router-dom';
import { HnSearchView } from '../modules/HnSearchView';
import { NotesView } from '../modules/NotesView';

export const Routes = () => {
  return (
    <RoutesDOM>
      <Route path="/" element={<NotesView />} />
      <Route path="/hnsearch/:query" element={<HnSearchView />} />
    </RoutesDOM>
  );
};
