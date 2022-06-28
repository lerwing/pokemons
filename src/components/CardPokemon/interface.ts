import { HTMLAttributes } from "react";
import { PokemonItem } from "../../interfaces"

export interface CardPokemonProps extends PokemonItem, HTMLAttributes<HTMLDivElement> {
    
}