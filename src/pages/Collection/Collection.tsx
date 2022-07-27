import { FC, HTMLAttributes, useEffect } from "react";
import { CardPokemon } from "../../components/CardPokemon";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { clearAllFlag, dellPokemon, saveLocal } from "../../store/pokemonSlice";
import "./Collection.scss"



const Collection:FC<HTMLAttributes<HTMLElement>> = () => {
    const dispatch = useAppDispatch()
    const { favoritPokemons } = useAppSelector(state => state.pokemonSlice)

    const dellPokemonHendler = (idPokemon: number) => {
        dispatch(dellPokemon(idPokemon));
        dispatch(saveLocal())
    };
    useEffect(() =>{
        dispatch(clearAllFlag());
    },[dispatch])
    
    return (
        <main className='page-сollection' >
            <h1 className="title-page">Ваша коллекция</h1>
            { favoritPokemons.length !==0 && favoritPokemons.map(ID => 
                <CardPokemon 
                    key={ID}
                    CallbackCard={dellPokemonHendler}
                    classNameBtn={"btn__clear"}
                    idPokemon = {ID}
                />
            )}
        </main>
    );
};

export default Collection