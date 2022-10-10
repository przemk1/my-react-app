import "./App.css";
import Home from "./home/Home";
import Calculators from "./calculators/Calculators";
import Demand from "./demand/Demand";
import Diet from "./diet/Diet";

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
    {
      path: "demand",
      element: <Demand />,
    },
    {
      path: "diet",
      element: <Diet />,
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
