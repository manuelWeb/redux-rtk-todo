import { configureStore } from '@reduxjs/toolkit';

import { counterSlice, todoSlice } from '@/redux/Slice'

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todo: todoSlice.reducer,
  }
});

export default store;
