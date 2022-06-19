import { Routes, Route, } from 'react-router-dom';
import './App.scss'
import { MenuLeft } from './components'
import { ROUTES } from './const';
import { Collection, Eror404, Search } from './pages';


function App() {

  return (
    <>
      <MenuLeft/>
      <Routes>
        <Route path={ROUTES.HOME} element={<Search/>}/>
        <Route path={ROUTES.COLLECTION} element={<Collection/>}/>
        <Route path={ROUTES.EROR404} element={<Eror404/>}/>
      </Routes>
    </>
  );
}

export default App;
