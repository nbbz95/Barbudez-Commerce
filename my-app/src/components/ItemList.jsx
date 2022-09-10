
import { useEffect, useState } from "react";
import Item from "./Item";


const ItemList = () => {
    const [funkos, setFunkos] = useState([])

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=Funkos')
            .then(resp => resp.json())
            .then(data => { setFunkos(data.results); }
            )

    }, [])

    return (
        <>
            {funkos.map((funkos, index) => {
                return (
                    <Item key={index} img={funkos.thumbnail} title={funkos.title} price={funkos.price} />
                )
            })}
        </>
    )
}


export default ItemList;