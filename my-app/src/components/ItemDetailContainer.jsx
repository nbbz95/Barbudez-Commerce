import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "./data/data";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [isLoading, setisLoading] = useState (true);
    const { id } = useParams();

        useEffect (() => {
            setisLoading (true);
            const getItems = new Promise ((resolve) => {
                setTimeout(() => {

                    const myData = data.find((item) => item.id === id);

                    resolve (myData);
            }, 1000);
                });
                getItems.then((res) => {
                    setProduct(res); })
                    setisLoading(false);
                }, []);

                return isLoading ? <h1>Cargando...</h1> :
                <ItemDetail product={product} />;
};

export default ItemDetailContainer;