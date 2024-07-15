import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Appbar from './components/Appbar';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import Footers from './components/Footers';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Product from './components/Product';
import Cart from './components/Cart';
import Adminpanel from './components/Adminpanel';
import Search from './components/Search';
import PaymentPage from './components/PaymentPage';
import Home from './components/Home';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Shopproduct from './components/Shopproduct';
import Mosaic from './components/Mosaic';
import UserDetails from './components/UserDetails'
import OrdersDetails from './components/OrdersDetails';


const App = () => { 
  const [currentProduct, setCurrentProduct] = useState(null);
  const navigate = useNavigate();

  const editProduct = (product) => {
    setCurrentProduct(product);
    navigate('/ProductForm');
  };

  const clearCurrentProduct = () => {
    setCurrentProduct(null);
  };

  const location = useLocation();
  const hideNavAndFooterRoutes = ['/Adminpanel', '/ProductForm', '/ProductList'];
  const hideNavAndFooter = hideNavAndFooterRoutes.includes(location.pathname);

  return (
    <div className="App">
      {!hideNavAndFooter && <Appbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:product_id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/Adminpanel" element={<Adminpanel />} />
        <Route path="/paymentpage" element={<PaymentPage />} />
        <Route path="/Shopproduct" element={<Shopproduct />} />
        <Route path="/ProductForm" element={<ProductForm currentProduct={currentProduct} clearCurrentProduct={clearCurrentProduct} />} />
        <Route path="/ProductList" element={<ProductList editProduct={editProduct} />} />
        <Route path="/mosaic" element={<Mosaic />} />
        <Route path="/OrdersDetails" element={<OrdersDetails/>} />
        <Route path="/UserDetails" element={<UserDetails />} />
      </Routes>
      {!hideNavAndFooter && <Footers />}
    </div>
  );
}

export default App;
