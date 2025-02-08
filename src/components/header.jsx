import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav
        style={{
          height: "100%",
          direction: "rtl",
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: "1fr auto auto",
          gap: "30px",
          padding: "0 20px",
        }}>
        <div>
          <Link to="manager">כניסה למנהל 🧑🏻‍💼</Link>
        </div>
        <Link to="/">דף הבית🏠</Link>
        <Link to="shopingCart">עגלת קניות🛒</Link>
      </nav>
    </header>
  );
}
