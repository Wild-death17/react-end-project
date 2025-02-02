export default function Store() {
  let products = [];
  return (
    <div>
      <div>
        {products.map((product) => (
          <div>
            <img src={product.image} />
            <div>{product.code}</div>
            <div>{product.name}</div>
            <p>מחיר: {product.price} ש"ח</p>
            <button>הוסף לעגלה</button>
          </div>
        ))}
      </div>
    </div>
  );
}
