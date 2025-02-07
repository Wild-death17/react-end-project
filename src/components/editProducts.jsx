import { Form, useLoaderData } from "react-router-dom";
export default function EditProduct() {
  let product = useLoaderData() || {};

  return (
    <div>
      <div>
        <input placeholder="קוד המוצר" name="code" type="search" />
        <button
          onClick={(e) => {
            /* reroute to /edit/:code */
          }}>
          חפש מוצר
        </button>
      </div>
      <Form method="POST">
        <input name="code" type="hidden" defaultValue={product.code} />
        <input
          defaultValue={product.name}
          placeholder="שם המוצר"
          name="name"
          type="text"
        />
        <input
          defaultValue={product.image}
          placeholder="תמונת המוצר"
          name="image"
          type="text"
        />
        <input
          defaultValue={product.price}
          placeholder="מחיר המוצר"
          name="price"
          type="text"
        />
        <button className="primary">ערוך</button>
      </Form>
    </div>
  );
}
