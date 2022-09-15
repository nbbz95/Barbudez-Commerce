const Item = ({img, title, price, category}) => {

  return (
<div style={{ border: '1px solid black', borderRadius: 5, margin: 10, padding: 5, width: 250, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <img src={img} alt="" style={{ width: '50%', height: '50%' }} />
    <h6>{title}</h6>
    <h4>${price}</h4>
    <p>{category}</p>
</div>
)

}

export default Item