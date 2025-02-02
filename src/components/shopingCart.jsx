import { Outlet, Link } from "react-router-dom";

export default function ShopingCart() {
  return (
    <>
      <Outlet />
      <div>
        <h3>סהכ: {}</h3>
        <Link to="/payment">לתשלום</Link>
      </div>
    </>
  );
}
