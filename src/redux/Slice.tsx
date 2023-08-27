import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IState {
  counter: {
    value: number,
  };
  todo: {
    id: number,
    done: boolean,
    text: string,
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

export interface ITodo {
  id: number;
  done: boolean;
  text: string;
}

/* const todoInitState: TTodoSliceState[] = [
  { id: 1, text: "Faire les courses", done: false },
  { id: 2, text: "Ménage !", done: true },
] */
// const initialState: ITodo[] = []
export const todoSlice = createSlice({
  name: 'todo',
  initialState: [] as IState['todo'][],
  reducers: {
    addTask: (state, action: PayloadAction<ITodo['text']>) => {
      // {oldType: 'ADD_TASK', type, 'todo/addTask', payload: 'texte de la tache'}
      const newTask = {
        id: Date.now(),
        done: false,
        text: action.payload
      }
      state.push(newTask)
    },
    toggleTask: (state, action: PayloadAction<ITodo['id']>) => {
      // {type: 'todo/toggleTask', payload: 20} // payload === task id
      const task = state.find(({ id }) => id === action.payload);
      task && (task.done = !task.done);
    },
    deleteTask: (state, action: PayloadAction<ITodo['id']>) => {
      //  {type: 'todo/deleteTask', payload: 15} // payload === task id
      return state.filter((t) => t.id !== action.payload);

    },
  }
})

/* export const createToggle = (id: number) => {
  return {
    type: 'todo/toggleTask',
    payload: id
  }
} */
export const { addTask, toggleTask, deleteTask } = todoSlice.actions