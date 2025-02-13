import { Link } from "react-router-dom";
import { useCart } from "../contexts/cartContext";
export default function ShopingCart() {
  const { displayCart, cartTotal } = useCart();

  return (
    <>
      {displayCart(true)}
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
