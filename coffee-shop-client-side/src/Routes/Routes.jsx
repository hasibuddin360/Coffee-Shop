/** @format */

import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home";
import AddUser from "../AddUser";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://127.0.0.1:5000/"),
      },
      {
        path: "/addUser",
        element: <AddUser />,
      },
    ],
  },
]);

export default Router;
