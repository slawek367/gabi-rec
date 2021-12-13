import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchNotebook } from '../../types';

export interface NotebookState {
  data: SearchNotebook[];
}

const initialState: NotebookState = {
  data: [],
};

export const notebookSlice = createSlice({
  name: 'notebooks',
  initialState,
  reducers: {
    addNotebook: (state, { payload }: PayloadAction<string>) => {
      state.data.push({
        title: payload,
        creation_date: new Date().toISOString(),
        search_results: [],
      });
    },
    deleteByTitle: (state, { payload }: PayloadAction<{ title: string }>) => {
      return {
        ...state,
        data: state.data.filter((notebook) => notebook.title !== payload.title),
      };
    },
    addHNSearch: (state, { payload }: PayloadAction<string>) => {
      //TODO
    },
  },
});

export const { addNotebook, deleteByTitle } = notebookSlice.actions;

export default notebookSlice.reducer;
