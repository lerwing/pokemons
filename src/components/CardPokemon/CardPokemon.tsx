import { FC } from "react";
import { CardPokemonProps } from "./interface";
import './CardPokemon.scss'
import { BtnBase } from "../BtnBase";


const CardPokemon:FC<CardPokemonProps> =({CallbackCard, classNameBtn, name, svgUrl, hp, attack, defense, speed, idPokemon, ...props}) => {

    const onClickHendler = () => {
        CallbackCard(idPokemon)
    };

    return (
        <div className="card" {...props}>
            <h2 className="card__title"> 
                {name} 
                <BtnBase type="button" className={classNameBtn} clickCallback={onClickHendler}/>
            </h2>
            <img className="card__img" src={svgUrl} alt="Нет картинки" />
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