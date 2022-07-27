import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../const";

export const searchPokemon = createAsyncThunk(
    'pokemon/fetchInput',
    async (textInput: string, thunkAPI) => {
        try {
            const response = await fetch(`${API.POKEMONS}${textInput}`);
            if (!response.ok) {
                throw new Error (textInput)
            } else {
                return response.json();
            }
            
        } catch (error:any) {
            // несмотря на то что в конструкторе message?: string не могу задать тип строка
            console.log(error)
            return thunkAPI.rejectWithValue (error.message)
        }
    },
);
