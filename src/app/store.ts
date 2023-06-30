import { configureStore } from "@reduxjs/toolkit"
import squaresReducer from "../features/squares/squaresSlice"

export const store = configureStore({
  reducer: {
    squares: squaresReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
