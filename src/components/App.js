import "./App.css";
import Home from "./home/Home";
import Calculators from "./calculators/Calculators";

import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import React from "react";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "calculators",
      element: <Calculators />,
    },
  ],
  {
    basename: "/my-react-app",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
