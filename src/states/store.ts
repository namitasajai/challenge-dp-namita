import { configureStore } from "@reduxjs/toolkit";
// @ts-ignore
import questionReducer from './questionSlice.ts';

export const store = configureStore({
    reducer: {
        question: questionReducer
    }
})

export type RootState = ReturnType<typeof store.getState>