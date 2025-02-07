export default function Store({ products }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "10px",
        margin: "20px auto",
        fontSize: "inherit",
      }}>
      {products.map((product, index) => (
        <div
          className="product-card"
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "5px",
            padding: "20px",
          }}
          key={index}>
          <img src={"./images/" + product.image + ".jpg"} />
          <div>מקט: {product.code}</div>
          <div>{product.name}</div>
          <p className="price-tag">מחיר: {product.price} ₪</p>
          <button
            className="primary"
            style={{
              width: "90%",
              aspectRatio: "5/1",
              fontSize: "inherit",
            }}>
            הוסף לעגלה
          </button>
        </div>
      ))}
    </div>
  );
}
