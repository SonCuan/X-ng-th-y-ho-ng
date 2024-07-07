import { useEffect, useState } from "react";
import "./App.css";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AuthForm from "./pages/AuthForm";
import PrivateRoute from './pages/PrivateRoute';
import ProductForm from "./pages/ProductForm";
import DoashBroad from "./pages/admin/DoashBroad";
import Home from './pages/Home';
import Header from "./components/Header";
import LayoutsClient from "./layout/LayoutsClient";
import LayoutsAdmin from "./layout/LayoutsAdmin";

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
     
      <main className="container">
        <Routes>
          <Route path="/admin" element={<PrivateRoute />}>
					<Route path="/admin" element={<LayoutsAdmin />}>
						<Route index element={<DoashBroad />} />
						<Route path="/admin/ProductAdd" element={<ProductForm />} />
						<Route path="/admin/ProductForm/:id" element={<ProductForm />} />
					</Route>
				</Route>

          <Route path="/" element={<LayoutsClient />}>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Navigate to="/" />} />
					{/* <Route path="/product-detail/:id" element={<ProductDetail />} /> */}
				</Route>


          <Route path="/Register" element={<AuthForm  isRegister/>} />
          <Route path="/login" element={<AuthForm  />} />

        
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
