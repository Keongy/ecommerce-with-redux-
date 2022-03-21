import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import './index.css'
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from "./pages/Home";
import Products from './pages/Products';
import ProductShowcase from './pages/ProductShowcase';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div className="global-container">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductShowcase />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shopping-cart' element={<ShoppingCart />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
