import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../const";
import { pokemonAdapter } from "./utils";

export const searchPokemon = createAsyncThunk(
    'pokemon/fetchInput',
    async (textInput: string, thunkAPI) => {
        try {
            const response = await fetch(`${API.POKEMONS}${textInput}`);
            if (!response.ok) {
                console.log(response)
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

export const loadPokemonCollection = async (idPocemon:Number) => {
        const response = await axios.get(`${API.POKEMONS}${idPocemon}`)
        return pokemonAdapter(response.data);
}
// export const loadPokemonCollection = createAsyncThunk(
//     'pokemon/loadPokemonCollection',
//     async (idPocemon: number, thunkAPI) => {
//         try {
//             const response = await fetch(`${API.POKEMONS}${idPocemon}`);
//             if (!response.ok) {
//                 console.log(response)
//                 throw new Error ('Server Error')
//             } else {
//                 return response.json();
//             }
            
//         } catch (error:any) {
//             // несмотря на то что в конструкторе message?: string не могу задать тип строка
//             console.log(error)
//             return thunkAPI.rejectWithValue (error.message)
//         }
//     },
// );