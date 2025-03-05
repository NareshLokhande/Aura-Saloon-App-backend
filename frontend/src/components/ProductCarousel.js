import React from "react";

function ProductCarousel() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card">
                <img
                  src="https://source.unsplash.com/300x250/?Lipstick"
                  className="card-img-top"
                  alt="Lipstick"
                />
                <div className="card-body">
                  <h5 className="card-title">Lipstick</h5>
                </div>
              </div>
            </div>
            {/* Add other product cards here */}
          </div>
        </div>
        {/* Add other carousel items here */}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ProductCarousel;
