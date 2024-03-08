import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "../src/pages/Login";
import { PublicHome } from "./pages/PublicHome";
import { Register } from "../src/pages/Register"
import { PrivateHome } from "./pages/PrivateHome"
import  TransactionsHistory  from "./pages/TransactionsHistory"
import { EditCategories } from "./pages/EditCategories"
import { EditUser } from "./pages/EditUser"
import { ErrorPage } from "../src/pages/ErrorPage";
import "semantic-ui-css/semantic.min.css";
import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () => {
    const [isLogged, setIsLogged] = useState(localStorage.getItem("user"))
  
    useEffect(() => {
      setIsLogged(localStorage.getItem("user"));
      console.log("useeffect")
    }, [localStorage])

  const router = createBrowserRouter([
    {
      path: "/",
      element:isLogged? <PrivateHome /> : <PublicHome/> ,
      loader: null,
    },
    {
      path: "/home",
      element:isLogged? <PrivateHome /> : <PublicHome/> ,
      loader: null,
    },
    {
      path: "/login",
      element: !isLogged? <Login /> : <ErrorPage/>,
      loader: null,
    },
    {
      path: "/register",
      element: !isLogged? <Register /> : <ErrorPage/>,
      loader: null,
    },
    {
      path: "/history",
      element:isLogged? <TransactionsHistory /> : <ErrorPage/>,
      loader: null,
    },
    {
      path: "/categories",
      element:isLogged? <EditCategories /> : <ErrorPage/>,
      loader: null,
    },
    {
      path: "/user",
      element: isLogged? <EditUser /> : <ErrorPage/>,
      loader: null,
    }
  ]);
  
 return <RouterProvider router={router} />

}

export default App;
