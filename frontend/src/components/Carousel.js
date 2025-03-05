import CarouselImage1 from "../assets/images/makeup1.jpg";
import CarouselImage2 from "../assets/images/facial1.jpg";
import CarouselImage3 from "../assets/images/hair1.jpg";
import CarouselImage4 from "../assets/images/mani1.jpg";

import React from "react";
import "../assets/css/Home.css"; // Make sure to import your stylesheet

function Carousel() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={CarouselImage1}
              className="d-block custom-carousel-image"
              alt="Bridal Makeup"
              style={{ filter: "brightness(50%)" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={{ color: "white" }}>Bridal Makeup</h2>
              <p style={{ color: "white" }}>
                Get ready with us to be a Picture-Perfect on your special day!
              </p>
              {/* <button className="btn btn-secondary bg-success">View</button> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={CarouselImage2}
              className="d-block custom-carousel-image"
              alt="Facial and Cleanup"
              style={{ filter: "brightness(50%)" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={{ color: "white" }}>Facial and Cleanup</h2>
              <p style={{ color: "white" }}>Glow Like a Star !</p>
              {/* <button className="btn btn-secondary bg-success">View</button> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={CarouselImage3}
              className="d-block custom-carousel-image"
              alt="HairStyles"
              style={{ filter: "brightness(50%)" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={{ color: "white" }}>HairStyles</h2>
              <p style={{ color: "white" }}>Life Isn't Perfect, But Your Hair Can Be!</p>
              {/* <button className="btn btn-secondary bg-success">View</button> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={CarouselImage4}
              className="d-block custom-carousel-image"
              alt="Manicure Padicure"
              style={{ filter: "brightness(50%)" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={{ color: "white" }}>Manicure / Padicure</h2>
              <p style={{ color: "white" }}>Treat yourself to a luxurious manicure and pedicure!</p>
              {/* <button className="btn btn-secondary bg-success">View</button> */}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
