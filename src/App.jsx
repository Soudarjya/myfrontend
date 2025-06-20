import React from 'react';
import { createContext } from "react";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductCard from './components/ProductCard';
import { Products } from './pages/Products';
import { Signup } from './pages/Signup';
import { Login } from './pages/LogIn';
import { Cart } from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import { Footer } from './Footer';
import { Fleet } from './components/Fleet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './redux/actions/productAction';
import { isLoading } from './redux/actions/loaderAction';
import Loader from './components/Loader';
import ScrollToTop from './ScrollToTop';
import { displayPartsToString } from 'typescript';
import { ConfirmEmail } from './pages/ConfirmEmail';
import { Check } from 'lucide-react';
import CheckEmail from './pages/CheckEmail';
import CustomSnackbar from './components/customSnackbar';
import NotFoundPage from './pages/NotFoundPage';
const userContext = createContext();
function App() {
  // const [loading, setloading] = useState(false);
  const [cart, setcart] = useState([]);
  const [data, setdata] = useState([]);
  const token=localStorage.getItem("tok");
  const loading=useSelector((state) => state.loader.loading);
  const dispatch=useDispatch();
  const { snackbarMessage='', startColor='', endColor='' } = useSelector(state => state.snackbar||{});

  useEffect(() => {
    dispatch(isLoading(true));
    const timer = setTimeout(() => {
      dispatch(isLoading(false));
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  const handleClose = () => {
    dispatch({
      type: "SET_SNACKBAR_MESSAGE",
      payload: { message: "", startColor: "", endColor: "" },
    });
  };

  if (loading) return <Loader />;
  return (
    <userContext.Provider value={{ cart: cart, setcart: setcart }}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar cart={cart}/>
          <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
          <ScrollToTop/>
          <CustomSnackbar open={snackbarMessage !== ""} onClose={handleClose} message={snackbarMessage} startColor={startColor} endColor={endColor} />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pro" element={<ProductCard product={data} />} />
              <Route path='/product/:id' element={<ProductDetail />} />
              <Route path='/fleet' element={<Fleet />} />
              <Route path='/confirmEmail' element={<ConfirmEmail/>}/>
              <Route path='/checkEmail' element={<CheckEmail/>}/>
              <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </userContext.Provider>
  );
}
export default App;
export {userContext}
