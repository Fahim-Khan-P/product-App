import { configureStore } from '@reduxjs/toolkit';
import  { productReducer }  from './reducer';


const store = configureStore({
  reducer: {
    books: productReducer,
  },
});

export default store;
