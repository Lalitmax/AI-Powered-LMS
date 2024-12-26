import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CourseData {
    value: number
}

const initialState: CourseData = {
    value: 1340,
}

export const counterSlice = createSlice({
    name: 'courseData',
    initialState,
    reducers: {
        increment: (state) => {
            console.log("llait")
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer