/* eslint-disable jsx-a11y/alt-text */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';


function Navbar() {
  return (
    <>
    <div className="container">
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
          <div>
            <Link to="/" >
              <img src={logo}/>
            </Link>
          </div>
            <Link className="link-light" to="/">inicio</Link>
            <Link className="link-light" to={<ItemListContainer/>}>Productos</Link>
            <Link className="link-light" to="#">Categorias</Link>
            <CartWidget />
          </div>
        </nav>
      </div></>
  )
}

export default Navbar