import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPages from "../pages/books/CartPages";
import CheckOut from "../pages/books/CheckOut";
import SingleBook from "../pages/books/SingleBook";
import OrderPage from "../pages/books/OrderPage";
import PrivateRoute from "./PrivateRoute";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <CartPages />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            {" "}
            <OrderPage />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            {" "}
            <CheckOut />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
    ],
  },
]);

export default router;
