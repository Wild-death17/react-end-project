import { Form, useLoaderData } from "react-router-dom";
export default function EditProduct() {
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
          className="form-tag"
          placeholder="קוד המוצר"
          name="code"
          type="search"
        />
        <button
          className="form-tag"
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
          className="form-tag"
          defaultValue={product.name}
          placeholder="שם המוצר"
          name="name"
          type="text"
        />
        <input
          className="form-tag"
          defaultValue={product.image}
          placeholder="תמונת המוצר"
          name="image"
          type="text"
        />
        <input
          className="form-tag"
          defaultValue={product.price}
          placeholder="מחיר המוצר"
          name="price"
          type="number"
        />
        <button className="form-tag">ערוך</button>
      </Form>
    </div>
  );
}
