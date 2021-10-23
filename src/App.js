import './App.css';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';

function App() {
  function addToCart(id) {
    console.log(`Item with ID ${id} added to cart`);
  }

  function removeFromCart(id) {
    console.log(`Item with ID ${id} removed from cart`)
  }

  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      <div className="main">
        <ProductsList addToCart={addToCart} removeFromCart={removeFromCart}/>
        <Cart />
      </div>      
    </div>
  );
}

export default App;
