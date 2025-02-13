import { Form } from "react-router-dom";
import { useCart } from "../contexts/cartContext";
export default function CashRegister() {
  const { displayCart, cartTotal } = useCart();

  return (
    <div>
      {displayCart()}
      <hr />
      <h3>
        סהכ:
        {cartTotal()} ₪
      </h3>
      <hr />
      <Form method="POST">
        <input
          className="form-tag"
          name="id"
          placeholder="תעודת זהות"
          type="text"
          required
        />
        <br />
        <input
          className="form-tag"
          name="address"
          placeholder="כתובת למשלוח"
          type="text"
          required
        />
        <br />
        <button className="form-tag">תשלום</button>
      </Form>
    </div>
  );
}
