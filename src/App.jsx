import { useEffect, useState } from "react";
import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import api from "./axios";
import Home from "./pages/Home";
import AuthForm from "./pages/AuthForm";
import PrivateRoute from './pages/PrivateRoute';
import ProductForm from "./pages/ProductForm";
import TaiSan from "./components/TaiSan";

function App() {
  const [products, setProducts] = useState([]);
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const logout = () => {
    if(confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("user");
      nav("/login");
    }
  }
  const hanldDelete = async (id) => {
        const idComfirm = confirm("Bạn có muốn xóa sản phầm này không?");
        if (idComfirm) {
          await api.delete(`/products/${id}`);
          setProducts(products.filter((product) => product.id !== id));
        }
  };

  const handleProduct = async (data) => {
    if(data.id){
      await api.patch(`/products/${data.id}`, data);
      const newData = await api.get("/products");
      setProducts(newData.data);
    }else {
      const res = await api.post("/products", data);
       setProducts([...products, res.data]);
    }
    if(confirm("Succsessfly, redirect to admin page")){
      nav("/admin");
    }
  };
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/admin">Home</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          {user ? (
							<li>
								<button onClick={logout} className="btn btn-info">
									Hello {user?.user?.email} - Logout
								</button>
							</li>
						) : (
							<li>
								<Link to="/login">Login</Link>
							</li>
						)}
        </ul>
      </header>
      <main className="container">
        <Routes>
          {/* Private route for admin */}
          <Route path="/admin" element={<PrivateRoute />}>
            <Route path="/admin" element={<Home products={products} onDeletProduct={hanldDelete} />} />
            <Route path="/admin/ProductAdd" element={<ProductForm onAddProduct={handleProduct} />} />
            <Route path="/admin/ProductForm/:id" element={<ProductForm onAddProduct={handleProduct} />} />
          </Route> 

          
          <Route path="/Register" element={<AuthForm  isRegister/>} />
          <Route path="/login" element={<AuthForm  />} />

          <Route path="/taisan" element={<TaiSan />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
