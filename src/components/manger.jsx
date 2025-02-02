import { Outlet, Link } from "react-router-dom";

export default function ManagerPage() {
  return (
    <>
      <aside>
        <nav>
          <Link to="/manager">הוספה</Link>
          <div>
            <input placeholder="קוד מוצר" type="text" />
            <Link to="edit">עריכה</Link>
          </div>
        </nav>
      </aside>
      <Outlet />
    </>
  );
}
