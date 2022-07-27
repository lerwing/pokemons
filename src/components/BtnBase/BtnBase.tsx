import { FC, ButtonHTMLAttributes } from "react";
import './BtnBase.scss';



const BtnBase:FC<ButtonHTMLAttributes<HTMLButtonElement> & {clickCallback?: () => void}> = ({children, clickCallback, ...props}) => {
    const click = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        clickCallback?.();
    };

    return (
        <button className="btn-base" onClick={click} { ...props } >
            {children}
        </button>
    );
};

export default BtnBase;