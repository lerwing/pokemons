import { createSlice } from "@reduxjs/toolkit";



const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        
    },
    reducers: {
        addPokemon(state: any, action: any) {
            //console.log(state);
            // явно подход косячный так как данный приходят с лишней глубиной вложенности!!!
            console.log(action.payload.payload);
        }
    },
})

export const { addPokemon } = pokemonSlice.actions

export default pokemonSlice.reducer