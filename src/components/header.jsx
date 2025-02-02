import { Link } from "react-router-dom";

export default function Header() {
  let navigation = (
    <nav>
      <Link to="/manager">כניסה למנהל</Link>
      <Link to="/store">דף הבית</Link>
      <Link to="/shopingCart">עגלת קניות</Link>
    </nav>
  );
  return <>{navigation}</>;
}
