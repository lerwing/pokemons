import { FC } from "react";
import { CardPokemonProps } from "./interface";
import './CardPokemon.scss'
import { BtnBase } from "../BtnBase";
import { pokemonAPI } from "../../service/getPokemonByIdService";
import { pokemonAdapter } from "../../store/utils";


const CardPokemon:FC<CardPokemonProps> =({CallbackCard, classNameBtn, idPokemon}) => {
    const {data} = pokemonAPI.useGetPokemonByIDQuery(idPokemon);
    const PokemonData = pokemonAdapter(data);

    const onClickHendler = () => {
        CallbackCard(idPokemon)
    };

    return (
        <div className="card">
            <h2 className="card__title"> 
                {PokemonData.name} 
                <BtnBase type="button" className={classNameBtn} clickCallback={onClickHendler}/>
            </h2>
            <img className="card__img" src={PokemonData.svgUrl} alt="Нет картинки" />
            <ul className="card__text">
                <li>Здоровье: {PokemonData.hp}</li>
                <li>Атака: {PokemonData.attack}</li>
                <li>Защита: {PokemonData.defense}</li>
                <li>Скорость: {PokemonData.speed}</li>
            </ul>
            
        </div>
    );
};

export default CardPokemon;