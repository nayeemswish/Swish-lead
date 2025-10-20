import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1E1E1E",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <img
        src="https://www.swish.global/wp-content/uploads/2024/01/Swiss-Logo-3-1-1.png"
        alt="SWISH"
        style={{ width: "150px", marginBottom: "30px" }}
      />
      <p style={{ fontWeight: "500" }}>
        © 2025{" "}
        <a
          href="https://www.swish.global/"
          style={{ textDecoration: "none", color: "#ff2929fd" }}
        >
          Swish Global.
        </a>{" "}
        All rights reserved.
      </p>

      <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
        <a
          href="https://bd.swish.global/warranty-policy/"
          style={{
            textDecoration: "none",
            color: "#aaa",
            marginRight: "10px",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#fff")}
          onMouseLeave={(e) => (e.target.style.color = "#aaa")}
        >
          Warranty Policy
        </a>
        |
        <a
          href="https://bd.swish.global/terms-conditions/"
          style={{
            textDecoration: "none",
            color: "#aaa",
            marginLeft: "10px",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#fff")}
          onMouseLeave={(e) => (e.target.style.color = "#aaa")}
        >
          Terms of Service
        </a>
      </p>
    </footer>
  );
};

export default Footer;
