
import Item from "./Item"

const ItemList = ({productos}) => {
  productos.map(() => {
    return (
      <Item title={productos.title} thumbnail={productos.thumbnail} order_backend={productos.order_backend} permalink={productos.permalink} />
    )
  }
    )}

export default ItemList;