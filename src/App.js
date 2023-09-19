import "./App.css";
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Products from "./components/pages/Products";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/services" Component={Services} />
          <Route path="/sign-up" Component={SignUp} />
          <Route path="/products" Component={Products} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
