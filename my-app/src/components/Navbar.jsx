import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() {
    return (
      <>
      <div className="container">
          <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
            <Link to={`/`}>Inicio</Link>
            <Link to={`/`}>Productos</Link>
            <Link to={`/item/:id`}>Figuras</Link>
              <CartWidget/>
            </div>
          </nav>
        </div></>
      
      
    )
  }
  
  export default Navbar