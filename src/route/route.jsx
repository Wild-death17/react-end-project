import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Store from "../components/store";
import ShopingCart from "../components/shopingCart";
import CashRegister from "../components/cashRegister";
import ManagerPage from "../components/manger";
import AddProduct from "../components/addProducts";
import EditProduct from "../components/editProducts";
import "../css/config.css";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          element: <Store />,
          index: true,
        },
        {
          path: "shopingCart",
          element: <ShopingCart />,
          children: [],
        },
        {
          path: "payment",
          element: <CashRegister />,
          children: [],
        },
        {
          path: "manager",
          element: <ManagerPage />,
          children: [
            {
              element: <AddProduct />,
              index: true,
            },
            {
              path: "edit",
              element: <EditProduct />,
              children: [],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
