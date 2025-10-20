import React from "react";

const HeroSection = () => {
  const bgImage =
    "https://www.swish.global/wp-content/uploads/2025/10/Bathward-hero.webp";

  const sectionStyle = {
    width: "100%",
    minHeight: "100vh",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    position: "relative",
    color: "#fff",
    textAlign: "start",
    overflow: "hidden",
  };

  const themeColor = {
    color: "#FEBE00",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.07)",
    background:
      "linear-gradient(90deg,rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.1) 100%)",
    zIndex: 1,
  };

  const textBox = {
    position: "relative",
    marginLeft: "100px",
    zIndex: 2,
    padding: "40px 20px",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "10px",
  };

  const titleStyle = {
    fontSize: "42px", // responsive font size
    fontWeight: 700,
    marginBottom: "10px",
    lineHeight: "1.2",
  };

  const subTitleStyle = {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "1.6",
    maxWidth: "700px",
  };

  const buttonStyle = {
    // transition: "background-color 0.4s ease, color 0.4s ease, border 0.4s ease",
    backgroundColor: "#FEBE00",
    marginTop: "10px",
    border: "1px solid #FEBE00",
    color: "#000",
    fontWeight: "600",
    textDecoration: "none",
    borderRadius: "6px",
    padding: "10px 50px",
    fontSize: "18px",
  };

  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={textBox}>
        <h1 style={titleStyle}>
          Create the Kitchen & Washroom <br /> You Love-
          <span style={themeColor}>Skip the Costly Errors</span>
        </h1>
        <p style={subTitleStyle}>
          Discover elegant designs and innovative features to create <br /> a
          washroom that reflects your style and comfort.
        </p>
        <a href="#Build-section-id" className="btn get-est" style={buttonStyle}>
          Get an estimate
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
