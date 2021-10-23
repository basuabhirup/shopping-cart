import './App.css';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';

function App() {
  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      <div className="main">
        <ProductsList />
        <Cart />
      </div>      
    </div>
  );
}

export default App;
