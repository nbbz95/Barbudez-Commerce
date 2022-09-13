
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";


const ItemList = () => {
    const [funkos, setFunkos] = useState([])
    const { idCategory } = useParams ()

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=Funkos')
            .then(resp => resp.json())
            .then(data => { setFunkos(data.results); }
            )
        

    }, [idCategory])


    return (
        <>
            {funkos.map((funkos, index) => {
                return (
                    <Item
                    key={index}
                    img={funkos.thumbnail}
                    title={funkos.title}
                    price={funkos.price}
                    category={funkos.category_id}
                    id={funkos.site_id}/>
            
                )
            })}
        </>
    )
}


export default ItemList;