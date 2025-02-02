import { Form } from "react-router-dom";

export default function CashRegister() {
  return (
    <Form action="">
      <input placeholder="תעודת זהות" type="text" />
      <br />
      <input placeholder="כתובת למשלוח" type="text" />
      <br />
      <button>תשלום</button>
    </Form>
  );
}
