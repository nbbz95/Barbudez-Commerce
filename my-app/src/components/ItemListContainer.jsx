import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from './data/data';
import ItemList from './ItemList';

const ItemListContainer =( { greeting } ) =>{
    const [items, setProductos] = useState([]);
    const [isLoading, setisLoading] = useState (true);
    const { idcategoria } = useParams ();
  
    useEffect (() => {
      setisLoading(true);
      const getItems = new Promise ((resolve) => {
         setTimeout(() => {
          const myData = idcategoria ? data.filter(item => item.id === '1')
        : data;
  
         resolve(myData);
         }, 1000);
        });
  
       getItems.then((res) => {
         setProductos (res);
      })
      .finally(() => setisLoading(false))
      }, [idcategoria]);
  
      return isLoading ? (
        <h1>Cargando....</h1>
      ) : (
  
      <div>
        <p>{greeting}</p>
        <ItemList items={items} />
      </div>
    );
      };
  
  export default ItemListContainer;

