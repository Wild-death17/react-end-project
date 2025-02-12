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
import { useCart } from "../contexts/cartContext";
export default function Router() {
  const [products, setProducts] = useState(Products);
  const { editItemInCart } = useCart();

  const addProduct = async ({ request }) => {
    let data = await Object.fromEntries(await request.formData());
    if (data) {
      setProducts((prevProd) => [...prevProd, data]);
    }
  };
  const editProduct = async ({ request }) => {
    let data = await Object.fromEntries(await request.formData());
    setProducts(
      products.map((prod) => {
        return prod.code == data.code ? data : prod;
      })
    );
    editItemInCart(data);
  };
  const loadProduct = async ({ params }) => {
    return products.find((prod) => prod.code == params.code);
  };

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
              action: addProduct,
              index: true,
            },
            {
              path: "edit/:code?",
              element: <EditProduct />,
              loader: loadProduct,
              action: editProduct,
              children: [],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
