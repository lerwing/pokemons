import { FC, HTMLAttributes } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../const';
import './MenuLeft.scss';

const MenuLeft:FC<HTMLAttributes<HTMLDivElement>> = (props) => {


    return (
        <div className='menu-left' {...props}>
            <NavLink to={ROUTES.HOME} className={({isActive}) => isActive ? 'link__active' : 'link'}>Поиск</NavLink>
            <NavLink to={ROUTES.COLLECTION} className={({isActive}) => isActive ? 'link__active' : 'link'}>Избранное</NavLink>
        </div>
    );
};

export default MenuLeft;