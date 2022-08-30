import React, { useState, useEffect} from 'react';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);
    const restProduct = () => {
        setCount (count - 1);
    }
    const sumProduct = () => {
        setCount (count + 1);
        }
        useEffect (() => {
            setCount (initial);
            }, [initial])
            return (
                <div className='card p-3 mb-2 bg-secondary text-white'>
                <div className='d-flex justify-content-center'>
                <button type="button" className="btn btn-dark" disabled={count <= 1} onClick={restProduct}>-</button>
                <span>{count}</span>
                <button type="button" className="btn btn-dark" disabled={count >= stock} onClick={sumProduct}>+</button>
                </div>
                <div className='d-flex justify-content-center'>
                    <button type="button" className="btn btn-dark" disabled={count >= stock} onClick= {() => onAdd(count)}>Agregar al carrito</button>
                </div>
                </div>
            )
}
export default ItemCount;