import React, {useState} from 'react'

function ProductCard(props) {
  const [isAdded, setIsAdded] = useState(props.isAdded)

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
      <button 
        style={{display: isAdded ? "none" : "inline-block"}}
        onClick={() => {
          props.addToCart(props.id)
          setIsAdded(true);
        }}
      >
      Add to Cart
      </button>
      <button 
        style={{display: isAdded ? "inline-block" : "none"}}
        onClick={() => {
          props.removeFromCart(props.id);
          setIsAdded(false);
        }}
      >
      Remove from Cart
      </button>
    </div>
  )
}

export default ProductCard
