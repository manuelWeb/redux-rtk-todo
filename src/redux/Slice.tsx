import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IState {
  counter: {
    value: number
  }
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    // increment: (state) => { state.value += 1 },
    // decrement: (state) => { state.value -= 1 },
    increment(state, action: PayloadAction<number>) { state.value += action.payload },
    decrement: (state, action: PayloadAction<number>) => { state.value -= action.payload },
    reset: (state,) => { state.value = 0 },
  }
})

// action creator by RTK
export const { increment, decrement, reset } = counterSlice.actions;
