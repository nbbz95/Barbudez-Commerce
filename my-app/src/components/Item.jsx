import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const Item = ({img, title, price, category, id}) => {
  const onAdd = () => {
      console.log('Ud. ha añadido un producto al carrito')
  }
  return (
  
<div style={{ border: '1px solid black', borderRadius: 5, margin: 10, padding: 5, width: 250, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <img src={img} alt="" style={{ width: '50%', height: '50%' }} />
    <h6>{title}</h6>
    <h4>${price}</h4>
    <p>{category}</p>
    <ItemCount stock={10} initial={1} onAdd={onAdd} />
</div>
)
  
}

export default Item