import React from "react";
import "../assets/css/Contact.css";

export function Contact() {
  return (
    <div className="wrapper">
      <div className="contact_form_container">
        <h1 className="contact_form_title">Contact Us</h1>
        <form>
          <div className="contact_form_fields">
            <input
              type="text"
              placeholder="Your Name"
              className="contact_form_input"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="contact_form_input"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="contact_form_input"
            />
          </div>
          <div className="contact_form_text">
            <textarea placeholder="Your Message"></textarea>
          </div>
          <div className="contact_form_button">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
