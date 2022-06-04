import { FC, InputHTMLAttributes } from "react";
import './InputSearch.scss';

const InputMain:FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <input {...props} className="input-search" />
    );
};

export default InputMain;