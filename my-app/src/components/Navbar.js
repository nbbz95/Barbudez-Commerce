import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
      <>
      <div className="container">
          <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
              <a className="link-light" link="#">Productos</a>
              <a className="link-light" link="#">Servicios</a>
              <a className="link-light" link="#">Nosotros</a>
            </div>
          </nav>
        </div></>
      
      
    )
  }
  
  export default Navbar