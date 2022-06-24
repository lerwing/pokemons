import { configureStore } from '@reduxjs/toolkit'
import ThunkMiddleware from 'redux-thunk';
import pokemonSlice from './pokemonSlice';
import asyncReducers from './async'

export default configureStore({
    reducer: {
        pokemon: pokemonSlice,
        async: asyncReducers,
    },
    middleware: [ThunkMiddleware],
});