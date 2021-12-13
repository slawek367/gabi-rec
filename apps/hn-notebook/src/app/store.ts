import { configureStore } from '@reduxjs/toolkit';
import notebooks, { NotebookState } from '../state/notebooks/notebooks';

export interface GlobalState {
  notebooks: NotebookState;
}

export default configureStore({
  reducer: {
    notebooks,
  },
  devTools: true,
});
