import { Routes as RoutesDOM, Route, Link } from 'react-router-dom';
import { HnSearchView } from '../modules/HnSearchView';

export const Routes = () => {
  return (
    <RoutesDOM>
      <Route path="/" element={<div>test</div>} />
      <Route path="/hnsearch/:query" element={<HnSearchView />} />
    </RoutesDOM>
  );
};
