import React from 'react'
import ProductCard from './ProductCard';
import products from '../all-products';

function ProductsList(props) {
  return (
    <div className="products-list">
      <h2>Products</h2>
      {products.map(product => (
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
        />
      ))}
      
    </div>
  )
}

export default ProductsList;
