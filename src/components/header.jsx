import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav>
        <Link to="manager">כניסה למנהל</Link>
        <Link to="/">דף הבית</Link>
        <Link to="shopingCart">עגלת קניות</Link>
      </nav>
    </header>
  );
}
