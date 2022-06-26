import { configureStore } from '@reduxjs/toolkit'
import ThunkMiddleware from 'redux-thunk';
import pokemonSlice from './pokemonSlice';

export default configureStore({
    reducer: {
        pokemon: pokemonSlice,
    },
    middleware: [ThunkMiddleware],
});