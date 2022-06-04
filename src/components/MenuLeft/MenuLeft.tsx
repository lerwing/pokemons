import { FC, HTMLAttributes } from 'react';
import { Outlet } from 'react-router-dom';
import { BtnBase } from '../BtnBase';
import './MenuLeft.scss';

const MenuLeft:FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <>
        <div className='menu-left' {...props}>
            <BtnBase>Поиск</BtnBase>
            <BtnBase>Избранное</BtnBase>
        </div>
        <Outlet/>
        </>
    );
};

export default MenuLeft;