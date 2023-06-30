import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { getRandomColor } from "../../utils/getRandomColor"

export interface SquaresState {
  list: listItem[]
}

interface listItem {
  color: string
}

const initialState: SquaresState = {
  list: [],
}

export const squaresSlice = createSlice({
  name: "squares",
  initialState,
  reducers: {
    setSquare: (state) => {
      state.list.unshift({
        color: getRandomColor(),
      })
    },
    removeSquare: (state) => {
      state.list.pop()
    },
  },
})

export const { setSquare, removeSquare } = squaresSlice.actions

export const selectList = (state: RootState) => state.squares.list

export default squaresSlice.reducer
