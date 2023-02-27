import { configureStore } from '@reduxjs/toolkit'
import myReducers from './index';
export default configureStore({
  reducer: myReducers
})