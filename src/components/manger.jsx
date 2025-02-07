import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function ManagerPage() {
  const [productCode, setProductCode] = useState("");
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "200px auto",
        height: "calc(100vh - 50px)",
      }}>
      <aside
        className="side-bar"
        style={{
          display: "flex",
          alignItems: "center",
        }}>
        <nav>
          <Link
            style={{
              width: "100%",
              padding: "10px",
              display: "block",
              textAlign: "center",
              border: "1px solid",
            }}
            to="/manager">
            הוספה
          </Link>
          <div
            style={{
              gap: "10px",
              width: "100%",
              display: "flex",
              padding: "10px",
              border: "1px solid",
              justifyContent: "center",
            }}>
            <Link to={`edit/${productCode}`}>עריכה</Link>
            <input
              style={{ width: "50%" }}
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
    </div>
  );
}
