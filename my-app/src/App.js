import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar'
import Error404 from './components/Error404';

function App() {
  return (
  <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route exact path="/" element={<ItemListContainer greeting={'Home'}/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/detail/:productId" element={<ItemDetailContainer />} />
              <Route  path="*" element={<Error404/>}/>
          </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
