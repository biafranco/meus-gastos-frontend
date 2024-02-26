import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "../src/pages/Login";
import { Home } from "../src/pages/Home";
import { ErrorPage } from "../src/pages/ErrorPage";
import "semantic-ui-css/semantic.min.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);

export default App;
