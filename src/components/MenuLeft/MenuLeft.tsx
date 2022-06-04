import { FC, HTMLAttributes } from 'react';
import { BtnBase } from '../BtnBase';
import './MenuLeft.scss';

const MenuLeft:FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div className='menu-left' {...props}>
            <BtnBase>Поиск</BtnBase>
            <BtnBase>Избранное</BtnBase>
        </div>
    );
};

export default MenuLeft;