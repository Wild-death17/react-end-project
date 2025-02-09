import { Form } from "react-router-dom";
export default function AddProduct() {
  return (
    <Form
      style={{
        display: "flex",
        margin: "auto",
        flexDirection: "column",
      }}
      method="POST">
      <input
        className="form-tag"
        placeholder="code"
        name="code"
        type="text"
        required
      />
      <input
        className="form-tag"
        placeholder="name"
        name="name"
        type="text"
        required
      />
      <input
        className="form-tag"
        placeholder="image"
        name="image"
        type="text"
        required
      />
      <input
        className="form-tag"
        placeholder="price"
        name="price"
        type="text"
        required
      />
      <button className="form-tag">הוסף</button>
    </Form>
  );
}
