import { PokemonItem } from "../interfaces";

export const pokemonAdapter = (data: any): PokemonItem => {

    return {
        name: data?.name ?? '',
        id: data?.id ?? 0,
        svgUrl: data?.sprites.other.dream_world.front_default ?? '',
        hp: data?.stats[0].base_stat ?? 0,
        attack: data?.stats[1].base_stat ?? 0,
        defense: data?.stats[2].base_stat ?? 0,
        speed: data?.stats[5].base_stat ?? 0,
    }
}