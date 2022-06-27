import { PokemonItem } from "../interfaces";



export interface StatePokemon {
    pokemon?: PokemonItem;
    pokemonIsLoad: boolean;
    pokemonIsError: boolean;
    pokemonIsErrorMessage: string;
    favoritPokemons: string[];
}