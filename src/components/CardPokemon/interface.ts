import { HTMLAttributes } from 'react';

export interface CardPokemonProps extends HTMLAttributes<HTMLDivElement> {
    idPokemon: number;
    classNameBtn: 'card__like' | 'btn__clear';
    CallbackCard: (value: number) => void;
}
