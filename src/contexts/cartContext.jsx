import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const displayCart = (flag) => {
    return cart.length > 0 ? (
      <table>
        <thead>
          <tr>
            <th>image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr
              style={{
                textAlign: "center",
              }}
              key={item.code}>
              <td>
                <img
                  style={{
                    width: "100px",
                  }}
                  src={"./images/" + item.image + ".jpg"}
                />
              </td>
              <td>{item.name}</td>
              <td>₪{item.price}</td>
              <td>
                {flag ? (
                  <div>
                    <button
                      onClick={() => {
                        removeFromCart(item.code);
                      }}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => {
                        addToCart(item);
                      }}>
                      +
                    </button>
                  </div>
                ) : (
                  item.quantity
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <h1> 🛒 העגלה שלך ריקה!</h1>
    );
  };
  const addToCart = (product) => {
    setCart((prevCart) => {
      if (prevCart.length == 0) return [{ ...product, quantity: 1 }];

      const foundItem = prevCart.find((item) => item.code == product.code);
      if (foundItem)
        return prevCart.map((item) =>
          item.code == product.code
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (code) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.code == code ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };
  const cartTotal = () => {
    return cart.reduce((sum, item) => (sum += item.price * item.quantity), 0);
  };
  const editItemInCart = (product) => {
    setCart((prevCart) => {
      if (prevCart.length == 0) return prevCart;
      return prevCart.map((item) => {
        return item.code == product.code
          ? { ...product, quantity: item.quantity }
          : item;
      });
    });
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        displayCart,
        addToCart,
        removeFromCart,
        editItemInCart,
        cartTotal,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
