import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboards from "./pages/dashboards/Dashboards.jsx";
import Inscription from "./pages/inscription/Inscription.jsx";
import Connexion from "./pages/connexion/Connexion.jsx";

// create router

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboards />,
  },
  {
    path: "/inscription",
    element: <Inscription />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
