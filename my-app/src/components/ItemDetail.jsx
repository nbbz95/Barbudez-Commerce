/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
    const [add, setAdd] = useState(false)
    const onAdd = () => {
        setAdd(!add)
    }

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
                 <ItemCount stock={10} initial={1} onAdd={onAdd} />
            }
        </div>
        </div>
            </>
    )
    }
     
     export default ItemDetail;