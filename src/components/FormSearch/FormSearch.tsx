import { FC, HTMLAttributes } from "react";
import { InputMain } from "../InputSearch";
import { BtnBase } from "../BtnBase"
import "./FormSearch.scss"

const FormSearch:FC<HTMLAttributes<HTMLFormElement>> = (props) => {
    

    return (
        <form {...props} className="form-search">
        <>
            <InputMain type="text" placeholder="Имя покемона"/>
            <BtnBase className='form-search__btnX'>X</BtnBase>
            <BtnBase>Поиск</BtnBase>
        </>
        </form>
    );
};

export default FormSearch;