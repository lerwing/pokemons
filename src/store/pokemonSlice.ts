import { createSlice } from "@reduxjs/toolkit";
import { searchPokemon } from "./apiService";
import { StatePokemon } from "./interface";
import { pokemonAdapter } from "./utils";


const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemon: undefined,
        pokemonIsLoad: false,
        pokemonIsError: false,
        pokemonIsErrorMessage: '',
        favoritPokemons: [],
    } as StatePokemon,
    reducers: {
        addPokemon(state: any, action: any) {
            console.log(state);
            console.log(action);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(searchPokemon.fulfilled, (state, action) => {
            //данные пришли
            state.pokemonIsLoad = false;
            state.pokemonIsError = false;
            state.pokemonIsErrorMessage = '';
            state.pokemon = pokemonAdapter(action.payload);
            console.log(action.payload);
        })
        builder.addCase(searchPokemon.pending, (state) => {
            state.pokemonIsLoad = true;
            state.pokemonIsError = false;
            state.pokemonIsErrorMessage = '';
        })
        builder.addCase(searchPokemon.rejected, (state, action) => {
            state.pokemonIsLoad = false;
            state.pokemonIsError = true;
            //уперто хочет работать только с типом unknown, хотя там строка
            state.pokemonIsErrorMessage = action.payload
            console.log('error: ', action.payload)
        })
    },
})

export const { addPokemon } = pokemonSlice.actions

export default pokemonSlice.reducer