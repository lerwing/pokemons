import { FC, HTMLAttributes } from "react";
import { FormSearch } from "../../components";
import "./Search.scss"
import { searchPokemon } from "../../store/apiService";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { CardPokemon } from "../../components/CardPokemon";


const Search:FC<HTMLAttributes<HTMLElement>> = (props) => {
    const dispatch = useAppDispatch()
    
    const { 
        pokemonIsLoad,
        pokemonIsError,
        pokemon,
        pokemonIsErrorMessage,
    } = useAppSelector (state => state.pokemonSlice)

    const searchPokemonProps = (namePokemon: string) => {
        dispatch(searchPokemon(namePokemon))
    };

    return (
        <main {...props} className='page-search' >
            <h1 className="title-page">Поймайте покемона</h1>
            <FormSearch sendForm={searchPokemonProps}/>
            {pokemonIsLoad && <h2>Ищем покемона...</h2>}
            {pokemonIsError && <h2>Покемон с именем {pokemonIsErrorMessage} не найден</h2>}
            {pokemon && <CardPokemon {...pokemon}/>}
        </main>
    );
};

export default Search