import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function MainLayout() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "50px auto",
      }}>
      <Header />
      <Outlet />
    </div>
  );
}
