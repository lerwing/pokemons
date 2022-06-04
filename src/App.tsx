import { Routes, Route, } from 'react-router-dom';
import './App.scss'
import { MenuLeft } from './components'
import { Collection, Eror404, Search } from './pages';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MenuLeft/>}>
          <Route index element={<Search/>}/>
          <Route path='collection' element={<Collection/>}/>
          <Route path='*' element={<Eror404/>}/>
        </Route>
      </Routes>
    </>
    
  );
}

export default App;
