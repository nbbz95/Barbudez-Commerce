import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar'

function App() {
  return (
  <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route exact path="/" element={<ItemListContainer greeting={'Home'}/>}/>
              <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
              <Route path='/item/:idDetail' element={<ItemDetailContainer/>}/>
          </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
