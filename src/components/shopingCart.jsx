import { Link } from "react-router-dom";
export default function ShopingCart() {
  let cart = [];
  return (
    <>
      {cart.length > 0 ? (
        <table>
          <thead></thead>
          <tbody></tbody>
        </table>
      ) : (
        <h1> 🛒 העגלה שלך ריקה!</h1>
      )}
      <hr />
      <div>
        <h3>סהכ: {}₪</h3>
        <Link to="/payment">לתשלום</Link>
      </div>
    </>
  );
}
