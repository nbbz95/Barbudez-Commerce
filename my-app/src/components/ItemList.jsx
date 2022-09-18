
import Item from "./Item";


const ItemList = ({productos}) => {


    return (
        <>
            {productos.map((productos, index) => {
                return (
                    <Item
                    key={index}
                    id={productos.id}
                    img={productos.thumbnail}
                    title={productos.title}
                    price={productos.price}/>
                )
            })}
        </>
    )
}


export default ItemList;