import React, { useContext } from 'react';
import { CartContext } from '../../context/ShoppingCartContext';

const Cart = () => {
  const { comision } = useContext(CartContext);


  return (
    <div>
      Mi carrito
      {comision}
    </div>
  );
};

export default Cart;
