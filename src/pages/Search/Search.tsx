import { FC, HTMLAttributes } from "react";
import { FormSearch } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import "./Search.scss"
import { searchPokemon } from "../../store/apiService";
import { StatePokemon } from "../../store/interface";


const Search:FC<HTMLAttributes<HTMLElement>> = (props) => {
    const dispatch = useDispatch<any>();
    const { 
        pokemonIsLoad,
        pokemonIsError,
    } = useSelector((state: { pokemon: StatePokemon; }) => state.pokemon);

    const searchPokemonProps = (namePokemon: string) => {
        dispatch(searchPokemon(namePokemon))
    };

    return (
        <main {...props} className='page-search' >
            <h1 className="title-page">Поймайте покемона</h1>
            <FormSearch sendForm={searchPokemonProps}/>
            {pokemonIsLoad && <h2>Ищем покемона...</h2>}
            {pokemonIsError && <h2>Покемон с таким имененм не найден</h2>}
        </main>
    );
};

export default Search