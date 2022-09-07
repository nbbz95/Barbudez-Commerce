const ItemDetail = ({ items }) => {
    return (
    <div>
    <img src={items. thumbnail} alt="" />
     <h5>{items.title} </h5>
     <h6> {items.id}</h6>
     <p>${items.price}</p>
     <button> COMPRAR</button>
     </div>
    )
    }
     
     export default ItemDetail;