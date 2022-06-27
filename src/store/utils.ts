import { PokemonItem } from "../interfaces";

export const pokemonAdapter = (data: any): PokemonItem => {

    return {
        name: data?.name ?? '',
        id: data?.id ?? 0,
        svgUrl: data?.sprites.other.dream_world.front_default ?? '',
    }
}