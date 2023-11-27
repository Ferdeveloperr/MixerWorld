import { createContext, useState } from "react";

export const CartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const comision = 58400

    cart.lenght

    return (
        <CartContext.Provider value={{ cart, setCart, comision }}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider