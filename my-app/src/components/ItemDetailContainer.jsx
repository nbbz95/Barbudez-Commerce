import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = (props) => {

            const [productos, setProductos] = useState([]);

            const ItemDetailPromise = async () => {
                
                
                    const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Funkos')
                    const data = await response.json();
                    setProductos (data.results[1]);
                }

            useEffect(() =>  {
                    setTimeout(() => {
                        ItemDetailPromise();
            },2000);
            }, []);

            return (

                <div>
                    <ItemDetail items={productos} />
                </div>
            )

};


export default ItemDetailContainer;