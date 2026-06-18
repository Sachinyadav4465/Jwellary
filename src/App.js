import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomeSection";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Cart from "./pages/Cart";
 import Wishlist from "./pages/Wishlist";
 import WhatsappIcon from "./Components/WhatsappIcon";
 import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
<Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/product/:id" element={<ProductDetails/>}/>
    </Routes>
    <Footer/>
    <WhatsappIcon/>

    </BrowserRouter>
  );
}

export default App;