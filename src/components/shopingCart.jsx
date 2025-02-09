import { Link } from "react-router-dom";
import { useCart } from "../contexts/cartContext";
export default function ShopingCart() {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <>
      {cart.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.code}>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>₪{item.price}</td>
                <td>{item.quantity}</td>
                <td>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1> 🛒 העגלה שלך ריקה!</h1>
      )}
      <hr />
      <div>
        <h3>
          סהכ:
          {cart.reduce((sum, item) => (sum += item.price * item.quantity), 0)} ₪
        </h3>
        <Link to="/payment">לתשלום</Link>
      </div>
    </>
  );
}
