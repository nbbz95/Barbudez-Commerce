/* eslint-disable jsx-a11y/alt-text */
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product, item }) => {
    const [add, setAdd] = useState(false)
    const { addItem } = useContext(CartContext)
    return (
    <>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <img src={product.imagen} style={{width:'500px'}}/>
            <h5>{product.nombre} </h5>
            <p>Categoria: {product.descripcion}</p>
            <p>Descuento:{product.descuento}</p>
            <p>Stock: {product.stock}</p>
        

        <div>
            {
                add ?
                ""
                :
                 <ItemCount item={item} stock={10} initial={1} addItem={addItem} />
            }
        </div>
        </div>
            </>
    )
    }
     
     export default ItemDetail;