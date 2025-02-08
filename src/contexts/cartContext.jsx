import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      if (prevCart.length === 0) return [{ ...product, quantity: 1 }];

      const foundItem = prevCart.find((item) => item.code == product.code);
      if (foundItem)
        return prevCart.map((item) =>
          item.code === product.code
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (code) => {};

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
