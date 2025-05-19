import { configureStore } from "@reduxjs/toolkit";
// Import your reducers here
import counterReducer from './examples/counterSlice';

export const store = configureStore({
    reducer: {
        // Add your reducers here
        counter: counterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;