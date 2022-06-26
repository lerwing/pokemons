import { combineReducers, configureStore } from '@reduxjs/toolkit'
import pokemonSlice from './pokemonSlice';

const rootReducer = combineReducers ({
    pokemonSlice
})

export const sutupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};



export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof sutupStore>
export type AppDispatch = AppStore['dispatch']