import { configureStore } from '@reduxjs/toolkit';

import { counterSlice } from '@/redux/Slice'

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

export default store;
