import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function EndBanner() {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        backgroundColor: "#173b5e",
        color: "white",
        padding: "40px 20px",
        minHeight: "40vh",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <h2 className=" fs-2" style={{ color: "white", fontWeight: "600" }}>
          Experience the Perfect Blend of Style & Function
        </h2>

        <a
          className="btn btn-light px-4 py-2 fw-semibold"
          style={{ textDecoration: "none" }}
          href="#Build-section-id"
        >
          Explore Now
        </a>

        {/* Still have Question section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            color: "white",
            flexWrap: "wrap", // mobile responsive
            fontSize: "1.1rem",
          }}
        >
          <span>Still have questions?</span>

          {/* Phone link */}
          <a
            href="tel:+8801712345678"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "white",
              textDecoration: "none",
              fontSize: "17px",
              fontWeight: 500,
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#0dcaf0")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            <FontAwesomeIcon icon={faPhone} /> +880 1712-345678
          </a>

          {/* WhatsApp link */}
          <a
            href="https://wa.me/8801712345678"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: 500,
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#25D366")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default EndBanner;
