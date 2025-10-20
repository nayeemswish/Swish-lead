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
        Why SWISH
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
          gap: "40px",
        }}
      >
        {[
          {
            icon: (
              <img
                src="https://www.swish.global/wp-content/uploads/2025/10/Design-1-1.svg"
                alt="Design Icon"
                style={{ width: "60px", height: "60px" }}
              />
            ),
            title: "Design",
            text: "With a talented research and development team, SWISH remains a trailblazer in new & trendy design innovation. We prioritise customer-driven concepts to produce the most exceptional solutions.",
          },
          {
            icon: (
              <img
                src="https://www.swish.global/wp-content/uploads/2025/10/Quality-1-1.svg"
                alt="Quality Icon"
                style={{
                  width: "60px",
                  height: "60px",
                  stroke: "#febe00",
                }}
              />
            ),
            title: "Quality",
            text: "SWISH creates exceptional products built with superior materials, embracing versatile innovative production techniques and cutting-edge research to set new standards of excellence.",
          },
          {
            icon: (
              <img
                src="https://www.swish.global/wp-content/uploads/2025/10/Service-1-1.svg"
                alt="Service Icon"
                style={{ width: "60px", height: "60px" }}
              />
            ),
            title: "Service",
            text: "At SWISH, we prioritise ongoing support, offering dedicated before and after-sales service to ensure customer satisfaction and build lasting trust at every stage.",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              width: "400px",
              backgroundColor: "#f8f9fc",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "10px",
              }}
            >
              {item.icon}
            </div>
            <h3
              style={{
                fontWeight: "500",
                marginBottom: "10px",
              }}
            >
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
