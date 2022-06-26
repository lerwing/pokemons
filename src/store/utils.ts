import { PokemonItem } from "../interfaces";

export const pokemonAdapter = (data: any): PokemonItem => {

    return {
        name: data?.name ?? '',
    }
}