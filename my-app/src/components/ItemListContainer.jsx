/* eslint-disable react-hooks/exhaustive-deps */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';



function ItemListContainer (props) {

  const[productos, setProductos] = useState([]);
  const buscarProductos = async () => {
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Funkos')
    const data = await response.json();
    setProductos(data.results);
  }catch(e) {
    console.log(e);
  }
}

useEffect (() => {
  buscarProductos();
},[])
return (
  <>
    <ItemList productos={productos}/>
  </>
)

}



export default ItemListContainer;


