import { useState, useMemo, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ProductCard from '../components/ProductCard';
import { userContext } from '../App';
import ScrollToTop from '../components/ScrollToTop';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productAction';

export function Products() {
  const dispatch=useDispatch();
  const [filteredProducts, setfilteredProducts] = useState([]);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  // Update filteredProducts whenever products change
  useEffect(() => {
    const products = useSelector(state => state.product.products); // extract from store
    setfilteredProducts(products || []);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = products.filter(
      (i) =>
        i.title.toLowerCase().includes(value) ||
        i.category.toLowerCase().includes(value)
    );
    setfilteredProducts(filtered);
  };
  
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h1>
            <p className="text-lg text-gray-600">
              Discover our collection of premium products
            </p>
          </motion.div>

          <div className="mb-8">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex mx-auto justify-evenly p-4 bg-gray-100 rounded-md">
              <button value={''} onClick={handleChange} className="px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-600 ">All</button>
              <button value={'tablets'} onClick={handleChange} className="px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-600 ">Tablets</button>
              <button value={'Laptops'} onClick={handleChange} className="px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-600 ">Laptops</button>
              <button value={'Mobiles'} onClick={handleChange} className="px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-600 ">Mobiles</button>
            </div>
          </div>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {
              filteredProducts.map((product, index) => {
                // console.log(index);

                return (
                  <ProductCard key={index} product={product} />
                )
              })
            }
          </motion.div>
        </div>
        <ScrollToTop />
      </div>
    </>
  )
}
