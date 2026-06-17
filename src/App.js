import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomeSection";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Cart from "./pages/Cart";
 import Wishlist from "./pages/Wishlist";

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
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;