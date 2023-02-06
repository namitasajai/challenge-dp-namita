import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalChoices: {}
}

export const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        setAnswer: (state, action) => {
            state.totalChoices[action.payload.prompt] = action.payload.choice
        },
        clear: (state) => {
            state.totalChoices = {}
        }
    }
})

export const { setAnswer, clear } = questionSlice.actions
export default questionSlice.reducer