import { FC, HTMLAttributes, useEffect } from "react";
import { CardPokemon } from "../../components/CardPokemon";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { loadPokemonCollection } from "../../store/apiService";
import { dellPokemon, viewPocemonCollection } from "../../store/pokemonSlice";
import "./Collection.scss"



const Collection:FC<HTMLAttributes<HTMLElement>> = () => {
    const dispatch = useAppDispatch()
    const { favoritPokemonsData, favoritPokemons } = useAppSelector(state => state.pokemonSlice)

    useEffect(() => {
        if (favoritPokemons){
            let scanID: boolean = false
            
            favoritPokemons.forEach((pokemonID) => {
                favoritPokemonsData.forEach((collectionData) => {
                    if (collectionData.idPokemon === pokemonID) {
                        scanID = true;
                    }
                });

                if (!scanID) {
                    dispatch(loadPokemonCollection(pokemonID))
                };
            });
        };
        //dispatch(loadPokemonCollection(1))
    },[dispatch, favoritPokemons, favoritPokemonsData]);

    // useEffect(() => {
    //     dispatch(viewPocemonCollection())
    // },[favoritPokemons]);

    const dellPokemonHendler = (idPokemon: number) => {
        dispatch(dellPokemon(idPokemon));
    };
    
    return (
        <main className='page-сollection' >
            <h1 className="title-page">Ваша коллекция</h1>
            { favoritPokemonsData.length !==0 && favoritPokemonsData.map(collection => 
                <CardPokemon 
                    key={collection.idPokemon}
                    CallbackCard={dellPokemonHendler}
                    classNameBtn={"card__like"}
                    {...collection}
                />
            )}
        </main>
    );
};

export default Collection