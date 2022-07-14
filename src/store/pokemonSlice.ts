import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
        addPokemon(state: StatePokemon, action: PayloadAction<number>) {
            const dublId:boolean = state.favoritPokemons.includes(action.payload);
            if(!dublId){
                state.favoritPokemons.push(action.payload)
            };
        },
        dellPokemon(state: StatePokemon, action: PayloadAction<number>){
            state.favoritPokemons = state.favoritPokemons.filter((value) => value !== action.payload)
        },
    },
    extraReducers: {
        [searchPokemon.fulfilled.type]: (state, action) => {
            //данные пришли
            state.pokemonIsLoad = false;
            state.pokemonIsError = false;
            state.pokemonIsErrorMessage = '';
            state.pokemon = pokemonAdapter(action.payload);
            console.log(action.payload);
        },
        [searchPokemon.pending.type]: (state) => {
            state.pokemonIsLoad = true;
            state.pokemonIsError = false;
            state.pokemon = undefined;
            state.pokemonIsErrorMessage = '';
        },
        [searchPokemon.rejected.type]: (state, action: PayloadAction<string>) => {
            state.pokemonIsLoad = false;
            state.pokemonIsError = true;
            state.pokemonIsErrorMessage = action.payload
            console.log('error: ', action.payload)
        },
    },
})

export const { addPokemon, dellPokemon } = pokemonSlice.actions

export default pokemonSlice.reducer