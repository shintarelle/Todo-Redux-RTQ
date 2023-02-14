import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './todosSlice';
import { TodoApi }  from '../components/TodoApi';

const store = configureStore({
  reducer: {
    // todos: todosSlice,
    [TodoApi.reducerPath]: TodoApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TodoApi.middleware),
})

export default store;
