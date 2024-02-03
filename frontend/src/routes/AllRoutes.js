import { Routes, Route, Navigate } from "react-router-dom";
import Login from '../pages/Login';
import Product from '../pages/Product';
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductList from '../pages/ProductList';
import Success from "../pages/Success";
import { useSelector } from "react-redux";

export const AllRoutes = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </div>
  )
}
