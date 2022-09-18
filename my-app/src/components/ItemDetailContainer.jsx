import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

            const [producto, setProductos] = useState([]);
            const { productId } = useParams()
 
            const ItemDetailPromise = async () => {

                    const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Funkos')
                    const data = await response.json();
                    setProductos (data.results[0]);
                }

            useEffect(() =>  {
                    setTimeout(() => {
                        ItemDetailPromise();
            },2000);
            }, [productId]);
          return (

                <div>
                    <ItemDetail items={producto} />
                </div>
            )

};


export default ItemDetailContainer;