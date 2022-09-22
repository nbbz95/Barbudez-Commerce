/* eslint-disable no-unused-expressions */
import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const isAtCart = (id) => {
        return items.some(item => item.id === id)
    }


    const addItem = ( item, qty) => {
        setItems([...items, {id: item.id, name: item.title, price: item.price, qty: qty}])
        console.log(items);
    }
    return (
        <CartContext.Provider value={{items, addItem, isAtCart}}>
            {children}
        </CartContext.Provider>
    )

}
