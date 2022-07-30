export interface StatePokemon {
    pokemonID: number | undefined;
    pokemonIsLoad: boolean;
    pokemonIsError: boolean;
    pokemonIsErrorMessage: string;
    favoritPokemons: number[];
}
