import { Form } from "react-router-dom";
export default function AddProduct() {
  return (
    <Form method="POST">
      <input placeholder="code" name="code" type="text" required />
      <input placeholder="name" name="name" type="text" required />
      <input placeholder="image" name="image" type="text" required />
      <input placeholder="price" name="price" type="text" required />
      <button className="primary">הוסף</button>
    </Form>
  );
}
