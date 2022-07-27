import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchPokemon } from "./apiService";
import { StatePokemon } from "./interface";


const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemonID: undefined,
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
            state.pokemonID = undefined;
            state.pokemonIsErrorMessage = 'Покемон добавлен в коллекцию';
        },
        dellPokemon(state: StatePokemon, action: PayloadAction<number>){
            state.favoritPokemons = state.favoritPokemons.filter((value) => value !== action.payload)
        },
        clearAllFlag(state: StatePokemon){
            state.pokemonID = undefined;
            state.pokemonIsLoad = false;
            state.pokemonIsError = false;
            state.pokemonIsErrorMessage = '';
        },
        saveLocal(state: StatePokemon){
            localStorage.setItem('collectionPokemonID', JSON.stringify(state.favoritPokemons));
        },
        loadLocal(state: StatePokemon){
            if(localStorage.getItem('collectionPokemonID')){
                //@ts-ignore
                state.favoritPokemons = JSON.parse(localStorage.getItem('collectionPokemonID'));
            }
        },
    },
    extraReducers: {
        [searchPokemon.fulfilled.type]: (state, action) => {
            //данные пришли
            state.pokemonIsLoad = false;
            state.pokemonIsError = false;
            state.pokemonIsErrorMessage = '';
            state.pokemonID = action.payload.id;
        },
        [searchPokemon.pending.type]: (state) => {
            state.pokemonIsLoad = true;
            state.pokemonIsError = false;
            state.pokemonID = undefined;
            state.pokemonIsErrorMessage = '';
        },
        [searchPokemon.rejected.type]: (state, action: PayloadAction<string>) => {
            state.pokemonIsLoad = false;
            state.pokemonIsError = true;
            state.pokemonIsErrorMessage = action.payload
        },
    },
})

export const { addPokemon, dellPokemon, saveLocal, loadLocal, clearAllFlag } = pokemonSlice.actions

export default pokemonSlice.reducer