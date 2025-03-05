// src/components/ProductCard.js
import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <div className="row g-5">
        <div className="col-md-4">
          <img
            src={product.image}
            className="img-fluid rounded-start"
            alt={product.name}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

// // components/ProductCard.js
// import React from 'react';

// const ProductCard = ({ imgSrc, title }) => {
//     return (
//         <div className="col">
//             <div className="card">
//                 <img src={imgSrc} className="card-img-top" alt={title} />
//                 <div className="card-body">
//                     <h5 className="card-title">{title}</h5>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProductCard;
