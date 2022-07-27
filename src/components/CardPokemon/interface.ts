import { HTMLAttributes } from "react";


export interface CardPokemonProps extends HTMLAttributes<HTMLDivElement> {
    idPokemon: number, 
    classNameBtn: 'card__like'|'card__dell',
    CallbackCard: (value: number) => void,
}