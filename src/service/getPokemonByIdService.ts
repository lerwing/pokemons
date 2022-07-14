import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from "../const";

export const pokemonAPI = createApi({
    reducerPath: 'pokemonAPI',
    baseQuery: fetchBaseQuery({ baseUrl: `${API.POKEMONS}` }),
    endpoints: (builder) => ({
        getPokemonByID: builder.query({
            query: (ID:number) => `${ID}`,
        }),
    }),
})
