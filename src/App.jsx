import { useEffect, useState } from "react";
import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import AuthForm from "./pages/AuthForm";
import PrivateRoute from './pages/PrivateRoute';
import ProductForm from "./pages/ProductForm";
import DoashBroad from "./pages/admin/DoashBroad";
import Home from './pages/Home';
import Header from "./components/Header";

function App() {
  const [products, setProducts] = useState([]);
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    if(confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("user");
      nav("/login");
    }
  }
  return (
    <div>
      <Header /> 
      <main className="container">
        <Routes>
          {/* Private route for admin */}
          <Route path="/admin" element={<PrivateRoute />}>
            <Route path="/admin/doashboard" element={<DoashBroad  />} />
            <Route path="/admin/ProductAdd" element={<ProductForm  />} />
            <Route path="/admin/ProductForm/:id" element={<ProductForm  />} />
          </Route> 

          <Route path="/home" element={<Home />} />
          <Route path="/Register" element={<AuthForm  isRegister/>} />
          <Route path="/login" element={<AuthForm  />} />

        
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
