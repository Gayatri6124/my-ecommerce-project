
import"bootstrap/dist/css/bootstrap.min.css";
import {Routes , Route} from "react-router-dom";
import Header from "./components/Header"
import Cart from "./components/Cart";
import Products from "./components/Product";
import Footer from "./components/Footer";
import { useState } from "react";
import About from "./components/About";

function App() {
  const [cart,setCart] = useState([]);
  const [showCart , setShowCart] = useState(false);//toggle for cart page

  const addToCart = (Products) => {
    setCart([...cart,Products]);
  } ;

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  }
  return (
    <>
    <Header cartCount={cart.length}/>

     <Routes>
       
      <Route path="/"
      element={<Products
        addToCart={addToCart} />} />
           <Route path="/products" 
      element={<Products
      addToCart={addToCart} />} />
        <Route path="/cart"
        element={<Cart cart={cart} 
      removeFromCart={removeFromCart} />} />
      <Route path="/about"
      element={<About />} />
    </Routes>
    <Footer></Footer>
 
    </>
  )
}

export default App
