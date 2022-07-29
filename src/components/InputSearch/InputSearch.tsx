import { FC, InputHTMLAttributes } from "react";
import './InputSearch.scss';

interface InputMain extends InputHTMLAttributes<HTMLInputElement> {
    classModify?: string
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const InputMain: FC<InputMain> = ({classModify ,...props}) => {
    return (
        <input {...props} className={"input "+classModify} />
    );
};

export default InputMain;