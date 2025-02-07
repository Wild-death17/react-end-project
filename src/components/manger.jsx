import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function ManagerPage() {
  const [productCode, setProductCode] = useState("");
  return (
    <>
      <aside>
        <nav>
          <Link
            to="/manager">
            הוספה
          </Link>
          <div>
            <Link to={`edit/${productCode}`}>עריכה</Link>
            <input
              placeholder="קוד מוצר"
              type="text"
              defaultValue={productCode}
              onChange={(e) => {
                setProductCode(e.target.value);
              }}
            />
          </div>
        </nav>
      </aside>
      <Outlet />
    </>
  );
}
