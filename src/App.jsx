import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "../src/pages/Login";
import { PublicHome } from "./pages/PublicHome";
import { Register } from "../src/pages/Register"
import { PrivateHome } from "./pages/PrivateHome"
import { ErrorPage } from "../src/pages/ErrorPage";
import "semantic-ui-css/semantic.min.css";
import { useEffect, useState } from "react";

const App = () => {

  const [isLoggedUser, setLoggedUser] = useState("");

  useEffect(()=> setLoggedUser(localStorage.getItem("user")), []);

  if (isLoggedUser)
  {
    return <Router>
      <Routes>
        <Route path="*" element={<PrivateHome />} />
        <Route path="/login" element={<PrivateHome />} />
        <Route path="/register" element={<PrivateHome />}/>
      </Routes>
    </Router>
  }

  return <Router>
    <Routes>      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />}/>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
}

export default App;
