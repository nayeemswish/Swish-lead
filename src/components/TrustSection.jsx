import { faBoxOpen, faGem, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TrustSection = () => {
  return (
    <section style={{ textAlign: "center", backgroundColor: "#fff" }}>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "600",
          marginBottom: "10px",
        }}
      >
        Why Families Trust SWISH
      </h2>
      <p style={{ color: "#555", marginBottom: "50px", paddingBottom: "20px" }}>
        Everything you need to create your dream space, <br /> with expert
        support every step of the way.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "100px",
        }}
      >
        {[
          {
            icon: <FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon>,
            title: "Complete Solution",
            text: "Kitchens & bathrooms under one roof. No need for multiple vendors.",
          },
          {
            icon: <FontAwesomeIcon icon={faTrophy}></FontAwesomeIcon>,
            title: "Expert Guidance",
            text: "Free design consultation & lifetime planning support.",
          },
          {
            icon: <FontAwesomeIcon icon={faGem}></FontAwesomeIcon>,
            title: "Luxury Quality",
            text: "Premium brands with warranty protection and lifetime quality.",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              backgroundColor: "#f8f9fc",
              borderRadius: "10px",
              padding: "30px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
              {item.icon}
            </div>
            <h3 style={{ fontWeight: "500", marginBottom: "10px" }}>
              {item.title}
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#666" }}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
