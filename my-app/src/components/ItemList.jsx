
import Item from "./Item";


export const ItemList = ({ items }) => {
    return (
        <section style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', alignItems:'stretch' }}> {items?.map((item) => (
           <Item  product={item}  key={item.id} />
         ))}
       </section>
    );
  }
  
  export default ItemList;