/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ items }) => {
    const [add, setAdd] = useState(false)
    const onAdd = () => {
        setAdd(!add)
    }

    return (
    <>
        <div>
            <img src={items.thumbnail} />
            <h5>{items.title} </h5>
            <h6> {items.id}</h6>
            <p>${items.price}</p>
        </div>

        <div>
            {
                add ?
                ""
                :
                 <ItemCount stock={10} initial={1} onAdd={onAdd} />
            }
        </div>
            </>
    )
    }
     
     export default ItemDetail;