import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchInput = createAsyncThunk(
    'pokemon/fetchInput',
    async (textInput: string) => {
        const response = await fetch(textInput);

        const data = await response.json();

        return data;
    },
);

const asyncReducers = createSlice({
    name: 'pokemon',
    initialState: {
        
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchInput.fulfilled, (state, action) => {
            //данные пришли
            console.log(action.payload)
        })
    },
})


export default asyncReducers.reducer