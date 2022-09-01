import { React, useEffect, useState } from 'react';
import Item from './Item';


function ItemList() {

  const[info, setInfo] = useState([])

  useEffect(() => {
    setTimeout(() =>
    fetch('data.json')
    .then((resp) => resp.json())
    .then((data) => setInfo(data)),
  2000
  );
  }, [])

return (
  <>

      {info && info.map(i => <Item id={i.nombre} imagen={i.imagen} precio={i.precio} descripcion={i.descripcion} />)}

  </>
)
}

export default ItemList;
