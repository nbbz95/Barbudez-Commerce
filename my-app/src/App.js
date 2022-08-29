import './App.css';
import ItemListContainer from './components/itemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

    <Navbar />
    <ItemListContainer/>

    <h2>Las ofertas de la semana</h2>

    </div>
  );
}

export default App;
