import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar'
import Error404 from './components/Error404';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
  <>
  <CartProvider>
    <BrowserRouter>
        <Navbar />

          <Routes>

            <Route path="/" element={<ItemListContainer greeting={'HOME'}/>}/>
            <Route path="/descripcion/:idcategoria" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route  path="*" element={<Error404/>}/>

          </Routes>

    </BrowserRouter>
  </CartProvider>
  </>
  );
}

export default App;
