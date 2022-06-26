import { PokemonItem } from "../interfaces";



export interface StatePokemon {
    pokemon?: PokemonItem;
    pokemonIsLoad: boolean;
    pokemonIsError: boolean;
    //тип unknown хотя на самом деле строка, но со строкой не получается
    pokemonIsErrorMessage: unknown;
    favoritPokemons: string[];
}