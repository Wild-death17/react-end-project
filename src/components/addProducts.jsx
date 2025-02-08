import { Form } from "react-router-dom";
export default function AddProduct() {
  const formstyle = { padding: "20px", fontSize: "larger" };
  return (
    <Form
      style={{
        display: "flex",
        margin: "auto",
        flexDirection: "column",
      }}
      method="POST">
      <input
        style={formstyle}
        placeholder="code"
        name="code"
        type="text"
        required
      />
      <input
        style={formstyle}
        placeholder="name"
        name="name"
        type="text"
        required
      />
      <input
        style={formstyle}
        placeholder="image"
        name="image"
        type="text"
        required
      />
      <input
        style={formstyle}
        placeholder="price"
        name="price"
        type="text"
        required
      />
      <button style={formstyle}>הוסף</button>
    </Form>
  );
}
