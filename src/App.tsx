import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { MenuLeft } from './components';
import { ROUTES } from './const';
import { useAppDispatch } from './hooks/redux';
import { Collection, Eror404, Search } from './pages';
import { loadLocal } from './store/pokemonSlice';

function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(loadLocal());
    }, [dispatch]);

    return (
        <div className="page">
            <MenuLeft />
            <Routes>
                <Route path={ROUTES.HOME} element={<Search />} />
                <Route path={ROUTES.COLLECTION} element={<Collection />} />
                <Route path={ROUTES.EROR404} element={<Eror404 />} />
            </Routes>
        </div>
    );
}

export default App;
