import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [productos, setFunkos] = useState([])
    const { categoryId } = useParams ()

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=Funkos')
            .then(resp => resp.json())
            .then(data => { setFunkos(data.results); }
            )
        

    }, [categoryId])

    return (
        <>

            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'space-evenly', alignItems:'stretch'}}>
                <ItemList productos={productos}/>
            </div>

        </>
    )
}

export default ItemListContainer;


