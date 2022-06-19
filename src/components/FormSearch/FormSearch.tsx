import { ChangeEvent, FC, HTMLAttributes, useCallback, useState } from "react";
import { InputMain } from "../InputSearch";
import { BtnBase } from "../BtnBase"
import "./FormSearch.scss"

const FormSearch:FC<HTMLAttributes<HTMLFormElement>> = (props) => {
    const [textInput, setTextInput] = useState('');

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTextInput(e?.target?.value)
    }, [setTextInput]);

    const clickCloseBtn = useCallback(() => {
        setTextInput('')
    }, []);

    const onSubmitHandler = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/asdasdas')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
    };

    return (
        <form {...props} className="form-search" onSubmit={onSubmitHandler}>
        <>
            <InputMain 
                type="text"
                placeholder="Имя покемона"
                value={textInput}
                onChange={onChangeHandler}
            />
            <BtnBase type="button" className='form-search__btnX' clickCallback={clickCloseBtn}>X</BtnBase>
            <BtnBase clickCallback={onSubmitHandler}>Поиск</BtnBase>
        </>
        </form>
    );
};

export default FormSearch;