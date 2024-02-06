import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import HomeCategory from './Components/Pages/HomeCategory';
import Product from './Components/Pages/Product'; // Import Product component
import Cart from './Components/Pages/Cart'; // Import Cart component
import LoginSignup from './Components/Pages/LoginSignup'; // Import LoginSignup component

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tiles" element={<HomeCategory category="Tile" />}></Route>
          <Route path="/stones" element={<HomeCategory category="Stone" />}></Route>
          <Route path="/vynil floors" element={<HomeCategory category="Vynil Floors" />}></Route>
          <Route path="/tools&installations" element={<HomeCategory category="Tools&Installations" />}></Route>
          <Route path="/FAQs" element={<HomeCategory category="FAQ" />}></Route>
          <Route path="/Contact us" element={<HomeCategory category="Contact Us" />}></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;