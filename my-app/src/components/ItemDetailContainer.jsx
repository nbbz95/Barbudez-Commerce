import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = (props) => {

            const [productos, setProductos] = useState([]);
            const { idDetail } = useParams ()
 
            const ItemDetailPromise = async () => {

                    const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Funkos')
                    const data = await response.json();
                    setProductos (data.results[0]);
                }

            useEffect(() =>  {
                    setTimeout(() => {
                        ItemDetailPromise();
            },2000);
            }, [idDetail]);
          return (

                <div>
                    <ItemDetail items={productos} />
                </div>
            )

};


export default ItemDetailContainer;