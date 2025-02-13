import { useEffect, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
export default function EditProduct({ products }) {
  const [currentProduct, setCurrentProduct] = useState({});
  const [code, setCode] = useState("");
  const loadedData = useLoaderData();

  useEffect(() => {
    if (loadedData) setCurrentProduct(loadedData);
  }, [loadedData]);

  const handleChanges = (e) => {
    setCurrentProduct((prevProduct) => {
      return { ...prevProduct, [e.target.name]: e.target.value };
    });
  };
  const handleSearch = () => {
    let foundProduct = products.find((prod) => prod.code == code);
    if (foundProduct) setCurrentProduct(foundProduct);
  };
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
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
          placeholder="קוד המוצר"
          name="code"
          type="search"
        />
        <button className="form-tag" onClick={handleSearch}>
          חפש מוצר
        </button>
      </div>
      <Form method="POST">
        <input
          className="form-tag"
          value={currentProduct.code}
          placeholder="קוד המוצר"
          name="code"
          type="disabled"
        />
        <input
          className="form-tag"
          value={currentProduct.name}
          onChange={handleChanges}
          placeholder="שם המוצר"
          name="name"
          type="text"
        />
        <input
          className="form-tag"
          value={currentProduct.image}
          onChange={handleChanges}
          placeholder="תמונת המוצר"
          name="image"
          type="text"
        />
        <input
          className="form-tag"
          value={currentProduct.price}
          onChange={handleChanges}
          placeholder="מחיר המוצר"
          name="price"
          type="number"
        />
        <button className="form-tag">ערוך</button>
      </Form>
    </div>
  );
}
