import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/store",
          element: <Store />,
          index: true,
          children: [],
        },
        {
          path: "/shopingCart",
          element: <ShopingCart />,
          children: [],
        },
        {
          path: "/payment",
          element: <CashRegister />,
          children: [],
        },
        {
          path: "/manager",
          element: <ManagerPage />,
          children: [],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
