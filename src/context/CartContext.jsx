import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = ({ quantity, options, id }) => {
    setCart([...cart, { options, quantity, id }]);
  };

  const removeFromCart = ({ id }) => {
    setCart(cart.filter((el) => id !== el.id));
  };
  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
