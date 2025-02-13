import { Link } from "react-router-dom";
import { useCart } from "../contexts/cartContext";
export default function ShopingCart() {
  const { cart, addToCart, removeFromCart, cartTotal } = useCart();

  return (
    <>
      {cart.length > 0 ? (
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <h3>
          סהכ:
          {cartTotal()} ₪
        </h3>
        <Link to="/payment">לתשלום</Link>
      </div>
    </>
  );
}
