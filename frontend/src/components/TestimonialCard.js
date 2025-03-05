// import React from "react";
import '../assets/css/TestimonialCard.css'

function TestimonialCard({ image, name, text, updated }) {
  return (
    <div className="testimonial-container">
      <div className="testimonial-card">
        <div className="row g-5">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt={name} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{text}</p>
              <p className="card-text">
                <small className="text-body-secondary">{updated}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
