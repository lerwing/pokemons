import { ChangeEvent, FC, HTMLAttributes, useCallback, useState } from "react";

import { InputMain } from "../InputSearch";
import { BtnBase } from "../BtnBase"
import "./FormSearch.scss"

const FormSearch:FC<HTMLAttributes<HTMLFormElement> & {sendForm?: (value: string) => void}> = ({sendForm, ...props}) => {
    const [textInput, setTextInput] = useState<string>('');

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTextInput(e?.target?.value)
    }, [setTextInput]);

    const clickCloseBtn = useCallback(() => {
        setTextInput('')
    }, []);
    
    const onSubmitHandler = useCallback(() => {
        if (textInput) {
            sendForm?.(textInput)
            setTextInput('')
        }
    }, [sendForm, textInput]);

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