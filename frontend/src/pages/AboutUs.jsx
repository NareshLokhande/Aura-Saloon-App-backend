import React from "react";
import "../assets/css/AboutUs.css";
import Anuja from "../assets/images/Anuja.jpg"
import Naresh from "../assets/images/Naresh.jpg"
import Pradnya from "../assets/images/Pradnya.jpg"

export function AboutUS() {
  const teamMembers = [
    {
      name: "Anuja Supernis",
      title: "Team Member",
      image: Anuja,
      description:
        "Anuja is the visionary behind our company, with over 20 years of experience in the industry. She leads our team with passion and dedication.",
    },
    {
      name: "Naresh Lokhande",
      title: "Team Member",
      image: Naresh,
      description:
        "Naresh is our technical wizard, responsible for the development and maintenance of our platform. He has a knack for solving complex problems with innovative solutions.",
    },
    {
      name: "Pradnya Giri",
      title: "Team Member",
      image: Pradnya,
      description:
        "Pradnya  brings creativity and strategic thinking to our marketing efforts. She is dedicated to building our brand and connecting with our audience.",
    },
  ];
  return (
    <>
      <div className="about-us-container">
        <h1>About Us</h1>
        <p>
            At AURA, our mission is to provide exceptional beauty services in a
            serene and luxurious environment...
          </p>
          <p className="owner-message">
            "Our passion for beauty and customer care is what drives us to
            deliver the best experience possible." - Owner
          </p>
          <br />
          <h1>Our Team</h1>

        <div className="team">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img
                src={member.image}
                alt={member.name}
                className="team-member-image"
              />
              <h2 className="team-member-name">{member.name}</h2>
              <h3 className="team-member-title">{member.title}</h3>
              <p className="team-member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
