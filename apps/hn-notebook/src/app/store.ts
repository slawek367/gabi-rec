import { configureStore } from '@reduxjs/toolkit';
import notebook from '../state/notebook/notebook';

export default configureStore({
  reducer: {
    notebook,
  },
  devTools: true,
});
