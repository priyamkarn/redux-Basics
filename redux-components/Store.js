import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CreateSlice';
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
