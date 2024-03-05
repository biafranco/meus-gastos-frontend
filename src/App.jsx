import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "../src/pages/Login";
import { PublicHome } from "./pages/PublicHome";
import { Register } from "../src/pages/Register"
import { PrivateHome } from "./pages/PrivateHome"
import { ErrorPage } from "../src/pages/ErrorPage";
import "semantic-ui-css/semantic.min.css";
import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const isLogged = localStorage.getItem("user")

  const router = createBrowserRouter([
    {
      path: "/",
      element: isLogged ? <PrivateHome /> : <Login />,
      loader: null,
    },
    {
      path: "/login",
      element: <Login />,
      loader: null,
    },
    {
      path: "/register",
      element: <Register />,
      loader: null,
    }
  ]);
  
 return <RouterProvider router={router} />

}

export default App;
