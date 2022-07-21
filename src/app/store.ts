import { configureStore, ThunkAction, Action, createSlice } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';


const initialState:any = {counter:0,showCounter:true}

const counterReducer = createSlice({
  name:"counter",
  initialState: initialState,
  reducers:{
    increment : (state) => {
      ++state.counter
    },
    decrement : (state) => {
      if (state.counter > 0) {
        --state.counter
      }
    },
    toggleCounter : (state) => {
      state.showCounter = !state.showCounter
    },
  }
})

export const counterAction = counterReducer!.actions

export const store = configureStore({
  reducer: {
    counter: counterReducer.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
export default store