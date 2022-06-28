import { FC } from "react";
import { CardPokemonProps } from "./interface";
import './CardPokemon.scss'


const CardPokemon:FC<CardPokemonProps> =({name, svgUrl, hp, attack, defense, speed, idPokemon, ...props}) => {



    return (
        <div className="card" {...props}>
            <h2 className="card__title"> {name} </h2>
            <img className="card__img" src={svgUrl} alt="" />
            <ul className="card__text">
                <li>Здоровье: {hp}</li>
                <li>Атака: {attack}</li>
                <li>Защита: {defense}</li>
                <li>Скорость: {speed}</li>
            </ul>
        </div>
    );
};

export default CardPokemon;