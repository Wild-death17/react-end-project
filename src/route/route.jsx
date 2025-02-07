import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "../db/products";
import MainLayout from "../layouts/mainLayout";
import Store from "../components/store";
import ShopingCart from "../components/shopingCart";
import CashRegister from "../components/cashRegister";
import ManagerPage from "../components/manger";
import AddProduct from "../components/addProducts";
import EditProduct from "../components/editProducts";
import "../css/config.css";
import { useState } from "react";
export default function Router() {
  let [products, setProducts] = useState(Products);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          element: <Store products={products} />,
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
