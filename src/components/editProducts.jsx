import { Form, useLoaderData } from "react-router-dom";
export default function EditProduct() {
  const formstyle = { padding: "20px", fontSize: "larger" };

  let product = useLoaderData() || {};

  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        flexDirection: "column",
      }}>
      <div style={{ margin: "30px" }}>
        <input
          style={formstyle}
          placeholder="קוד המוצר"
          name="code"
          type="search"
        />
        <button
          style={formstyle}
          onClick={(e) => {
            /* reroute to /edit/:code */
          }}>
          חפש מוצר
        </button>
      </div>
      <Form
        style={{
          display: "flex",
          margin: "auto",
          flexDirection: "column",
        }}
        method="POST">
        <input name="code" type="hidden" defaultValue={product.code} />
        <input
          style={formstyle}
          defaultValue={product.name}
          placeholder="שם המוצר"
          name="name"
          type="text"
        />
        <input
          style={formstyle}
          defaultValue={product.image}
          placeholder="תמונת המוצר"
          name="image"
          type="text"
        />
        <input
          style={formstyle}
          defaultValue={product.price}
          placeholder="מחיר המוצר"
          name="price"
          type="text"
        />
        <button style={formstyle}>ערוך</button>
      </Form>
    </div>
  );
}
