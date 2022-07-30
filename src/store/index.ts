import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { pokemonAPI } from '../service/getPokemonByIdService';
import pokemonSlice from './pokemonSlice';

const rootReducer = combineReducers({
    pokemonSlice,
    [pokemonAPI.reducerPath]: pokemonAPI.reducer,
});

export const sutupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonAPI.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof sutupStore>;
export type AppDispatch = AppStore['dispatch'];
