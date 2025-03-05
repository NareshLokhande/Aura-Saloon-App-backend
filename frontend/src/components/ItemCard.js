import React from 'react';

function ItemCard({ imageURL, title, text, category, price, addToCart }) {
    const handleAddToCart = () => {
        addToCart({ imageURL, title, text, price, quantity: 1 });
    };

    return (
        <div className="col">
            <div className="card h-100">
                <img src={imageURL} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{category}</p>
                    <p className="card-text">{text}</p>
                    <p className="card-text">₹{price}</p>
                    <br />
                    <button type="button" className="btn btn-outline-dark btn-sm" onClick={handleAddToCart}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;





// import React from 'react';

// function ItemCard({ imageURL, title, text, category, price, addToCart  }) {

//     const handleAddToCart = () => {
//         addToCart({ imageURL, title, text, price });
//     };

//     return (
//         <div className="col">
//             <div className="card h-100">
//                 <img src={imageURL} className="card-img-top" alt={title} />
//                 <div className="card-body">
//                     <h5 className="card-title">{title}</h5>
//                     <p className="card-text">{category}</p>
//                     <p className="card-text">{text}</p>
//                     <p className="card-text">₹{price}</p>
//                     <br />
//                     <button type="button" className="btn btn-outline-dark btn-sm" onClick={handleAddToCart}>Add To Cart</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ItemCard;
