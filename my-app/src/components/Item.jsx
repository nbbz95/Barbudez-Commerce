import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Item({title, thumbnail, order_backend, permalink}){
  return(
    <div className="card" key={order_backend}>
    <div className="container">
        <h4><b>{title}</b></h4>
        <img src={thumbnail} alt={title} />
        <p>{permalink}</p>
        <button>agregar producto</button>
    </div>
  </div>
 );
}
export default Item;