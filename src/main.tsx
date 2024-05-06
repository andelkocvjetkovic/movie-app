import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/inter";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "@/routes/root.tsx";
import ErrorPage from "@/routes/error-page";
import Item from "@/routes/item";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:id",
    element: <Item />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
