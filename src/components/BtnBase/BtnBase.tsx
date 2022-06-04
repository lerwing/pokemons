import { FC, ButtonHTMLAttributes } from "react";
import './BtnBase.scss';



const BtnBase:FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...props}) => {
    const click = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        console.log('click')
    };

    return (
        <button className="btn-base" onClick={click} { ...props } >
            {children}
        </button>
    );
};

export default BtnBase;