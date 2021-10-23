import React from 'react'
import ProductCard from './ProductCard';
import products from '../all-products';

function Cart(props) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {products
        .filter(product => props.productsInCart.includes(product._id))
        .map(product => (
          <ProductCard 
          key={product._id}
          id={product._id}
          title={product.title}
          image={product.image}
          description={product.description}
          price={product.price}
          availableSizes={product.availableSizes}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          isAdded={true}
        />
        ))
      }
    </div>
  )
}

export default Cart
