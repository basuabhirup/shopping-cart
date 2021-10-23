import React from 'react'
import ProductCard from './ProductCard';
import products from '../all-products';

function ProductsList() {
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
        />
      ))}
      
    </div>
  )
}

export default ProductsList;
