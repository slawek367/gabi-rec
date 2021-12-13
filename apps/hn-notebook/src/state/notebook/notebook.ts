import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchNotebook } from '../../types';

interface NotebookState {
  notebooks: SearchNotebook[];
}

const initialState: NotebookState = {
  notebooks: [],
};

export const notebookSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNotebook: (state, { payload }: PayloadAction<SearchNotebook>) => {
      state.notebooks.push(payload);
    },
    deleteByTitle: (state, { payload }: PayloadAction<{ title: string }>) => {
      state.notebooks.filter((notebook) => notebook.title !== payload.title);
    },
  },
});

export const { addNotebook, deleteByTitle } = notebookSlice.actions;

export default notebookSlice.reducer;
