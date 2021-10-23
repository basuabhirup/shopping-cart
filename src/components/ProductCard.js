import React from 'react'

function ProductCard(props) {
  return (
    <div className="product-card">
      <h3>{props.title}</h3>
      <img src={props.image} alt={props.title}></img>
      <p>{props.description}</p>
      <div className="card-bottom">
        <div>Rs.{props.price}/-</div>
        <div>
          {props.availableSizes.map(size => (
            <span className="size">{size}</span>
          ))}
        </div>
      </div>
      <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard
