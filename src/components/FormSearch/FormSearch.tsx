import { ChangeEvent, FC, HTMLAttributes, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { addPokemon } from "../../store/pokemonSlice";
import { fetchInput } from "../../store/async";

import { InputMain } from "../InputSearch";
import { BtnBase } from "../BtnBase"
import { API } from "../../const";
import "./FormSearch.scss"

const FormSearch:FC<HTMLAttributes<HTMLFormElement>> = (props) => {
    const [textInput, setTextInput] = useState<string>('');
    const dispatch = useDispatch<any>();

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTextInput(e?.target?.value)
    }, [setTextInput]);

    const clickCloseBtn = useCallback(() => {
        setTextInput('')
    }, []);
    
    const onSubmitHandler = () => {
        dispatch(fetchInput(`${API.POKEMONS}${textInput}`)).then((data:any) => {
            //при такой передачи данных двойная глубина .payload
            dispatch(addPokemon(data));
        });
    };
    // старая версия
    // const onSubmitHandler = () => {
    //     fetch(`${API.POKEMONS}${textInput}`)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         dispatch(addPokemon(data));
    //     });
    // };

    return (
        <form {...props} className="form-search">
        <>
            <InputMain 
                type="text"
                placeholder="Имя покемона"
                value={textInput}
                onChange={onChangeHandler}
            />
            <BtnBase type="button" className='form-search__btnX' clickCallback={clickCloseBtn}>X</BtnBase>
            <BtnBase type="submit" clickCallback={onSubmitHandler}>Поиск</BtnBase>
        </>
        </form>
    );
};

export default FormSearch;