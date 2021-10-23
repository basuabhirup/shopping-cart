import React, {useState} from 'react';
import './App.css';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';

function App() {
  const [productsInCart, setProductsInCart] = useState([]);

  function addToCart(id) {
    console.log(`Item with ID ${id} added to cart`);
    setProductsInCart([...productsInCart, id])
  }

  function removeFromCart(id) {
    console.log(`Item with ID ${id} removed from cart`)
    setProductsInCart(productsInCart.filter(productId => productId !== id))
  }

  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      <div className="main">
        <ProductsList addToCart={addToCart} productsInCart={productsInCart} removeFromCart={removeFromCart}/>
        <Cart productsInCart={productsInCart} removeFromCart={removeFromCart}/>
      </div>      
    </div>
  );
}

export default App;
