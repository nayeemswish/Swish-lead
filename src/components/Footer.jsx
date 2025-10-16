import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0b1b3f",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <p style={{ fontWeight: "500" }}>
        © 2025 Swish Global. All rights reserved.
      </p>
      <p style={{ fontSize: "0.9rem", color: "#aaa" }}>
        Privacy Policy | Terms of Service
      </p>
    </footer>
  );
};

export default Footer;
