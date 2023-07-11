import { configureStore } from '@reduxjs/toolkit';

import Reducer from '@/redux/Slice';

const store = configureStore({
  reducer: {
    Reducer,
  }
});

export default store;
