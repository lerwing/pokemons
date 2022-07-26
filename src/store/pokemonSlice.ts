import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadPokemonCollection, loadPokemonCollection2, searchPokemon } from "./apiService";
import { StatePokemon } from "./interface";
import { pokemonAdapter } from "./utils";


const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemon: undefined,
        pokemonIsLoad: false,
        pokemonIsError: false,
        pokemonIsErrorMessage: '',
        favoritPokemons: [1,2],
        favoritPokemonsData: [],
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
        clearResultSerth(state: StatePokemon){
            state.pokemon = undefined;
            state.pokemonIsLoad = false;
            state.pokemonIsError = false;
            state.pokemonIsErrorMessage = '';
        },
        viewPocemonCollection(state: StatePokemon){
            state.pokemonIsErrorMessage = '';
            state.pokemonIsLoad = false;
            state.pokemonIsError = false;
            state.favoritPokemons.forEach((idPokemon) =>{
                //state.favoritPokemonsData.push(pokemonAdapter(loadPokemonCollection(idPokemon)))
                Promise.any([
                    loadPokemonCollection2(idPokemon)
                ]).then(result =>{
                    result = pokemonAdapter(result);
                    console.log(result)
                    //state.favoritPokemonsData.push(result)
                })
                //console.log(loadPokemonCollection(idPokemon))
            })
            //console.log(state.favoritPokemonsData)
            //console.log(state.favoritPokemons)
            //const temp = loadPokemonCollection(22)
            //loadPokemonCollection(22)
            //console.log(temp)
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
        [loadPokemonCollection.fulfilled.type]: (state, action) => {
            console.log(pokemonAdapter(action.payload));
            state.favoritPokemonsData.push(pokemonAdapter(action.payload))
        },
    },
})

export const { addPokemon, dellPokemon, clearResultSerth, viewPocemonCollection } = pokemonSlice.actions

export default pokemonSlice.reducer