import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './todosSlice'



const store = configureStore({
  reducer: todosSlice
})

export default store;
