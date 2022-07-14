import { FC, HTMLAttributes } from "react";
import { CardPokemon } from "../../components/CardPokemon";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { PokemonItem } from "../../interfaces";
import { pokemonAPI } from "../../service/getPokemonByIdService";
import { dellPokemon } from "../../store/pokemonSlice";
import { pokemonAdapter } from "../../store/utils";
import "./Collection.scss"



const Collection:FC<HTMLAttributes<HTMLElement>> = () => {
    const dispatch = useAppDispatch()
    const { favoritPokemons } = useAppSelector(state => state.pokemonSlice)
    let collection: PokemonItem[] = [];

    const multiGet = (arrId: number[]) => {
        
        arrId.forEach((item, index) => {
            const { data } = pokemonAPI.useGetPokemonByIDQuery(item);
            collection[index] = pokemonAdapter(data);
        })
    };
    
    multiGet(favoritPokemons)

    const dellPokemonHendler = (idPokemon: number) => {
        dispatch(dellPokemon(idPokemon))
    };
    
    return (
        <main className='page-сollection' >
            <h1 className="title-page">Ваша коллекция</h1>
            { collection.length !==0 && collection.map(collection => 
                <CardPokemon key={collection.idPokemon} CallbackCard={dellPokemonHendler} classNameBtn={"card__like"} {...collection}/>
            ) }
        </main>
    );
};

export default Collection