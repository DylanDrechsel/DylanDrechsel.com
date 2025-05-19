import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { z } from 'zod';

// Define a Zod schema for the Counter state
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CounterStateSchema = z.object({
  value: z.number().lte(5, { message: 'MAX NUMBER IS 5!' }),
});

// Infer the TypeScript type from the Zod schema
type CounterState = z.infer<typeof CounterStateSchema>;

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
    name: 'counter', // The name of the slice. Used in Action Types.
    initialState,
    reducers: {
        // ----> Reducer functions that handle state updates <----
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        imcrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

// Action Creators are generated for each case reducer function
export const { increment, decrement, imcrementByAmount } = counterSlice.actions;

// The reducer function for this slice
export default counterSlice.reducer;