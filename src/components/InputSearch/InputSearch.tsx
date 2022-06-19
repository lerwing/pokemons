import { FC, HTMLProps } from "react";
import './InputSearch.scss';

const InputMain:FC<HTMLProps<HTMLInputElement>> = (props) => {
    return (
        <input {...props} className="input-search" />
    );
};

export default InputMain;