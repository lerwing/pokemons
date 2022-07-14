import { HTMLAttributes } from "react";
import { PokemonItem } from "../../interfaces"

export interface CardPokemonProps extends PokemonItem, HTMLAttributes<HTMLDivElement> {
    classNameBtn: 'card__like'|'card__dell',
    CallbackCard: (value: number) => void,
}