import { FC, HTMLAttributes } from "react";
import { FormSearch } from "../../components";
import { useDispatch } from "react-redux";
import "./Search.scss"
import { searchPokemon } from "../../store/apiService";



const Search:FC<HTMLAttributes<HTMLElement>> = (props) => {
    const dispatch = useDispatch<any>();

    const searchPokemonProps = (namePokemon: string) => {
        dispatch(searchPokemon(namePokemon))
    };

    return (
        <main {...props} className='page-search' >
            <h1 className="title-page">Поймайте покемона</h1>
            <FormSearch sendForm={searchPokemonProps}/>
        </main>
    );
};

export default Search