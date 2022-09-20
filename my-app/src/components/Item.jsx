import { Link } from "react-router-dom"

const Item = ({product}) => {

  return (
<div style={{ border: '1px solid black', borderRadius: 5, margin: 10, padding: 5, width: 250, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignContent:'center', justifyContent:'space-between', alignItems: 'stretch'}}>
      <div style={{display:'flex', justifyItems:'center', flexDirection:'column', alignItems:'center'}}>
      <img src={product.imagen} alt={product.nombre} style={{ width: '50%', height: '50%'}} />
            <h6 style={{textAlign: 'center'}}>{product.nombre}</h6>
            <h4>${product.precio}</h4>
            <Link to={`/item/${product.id}`}>
            <button>Ver detalle</button>
            </Link>
        </div>
</div>
)

}

export default Item
