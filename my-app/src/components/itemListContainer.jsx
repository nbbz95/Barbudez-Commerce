const ItemListContainer = ({props}) => { 
    let contenido = props.contenido
    return (
        <div>
        <h1>Catalogo del Producto</h1>
        {contenido}
        </div>
    )
}
    export default ItemListContainer;


