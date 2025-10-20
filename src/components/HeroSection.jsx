import React from "react";

const HeroSection = () => {
  const bgImage =
    "https://www.swish.global/wp-content/uploads/2024/01/bathware-solution-1-1.jpg";

  const sectionStyle = {
    width: "100%",
    minHeight: "100vh",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    color: "#fff",
    textAlign: "center",
    overflow: "hidden",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    zIndex: 1,
  };

  const textBox = {
    position: "relative",
    zIndex: 2,
    padding: "40px 20px",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  };

  const titleStyle = {
    fontSize: "clamp(2rem, 5vw, 3.5rem)", // responsive font size
    fontWeight: 700,
    marginBottom: "10px",
    lineHeight: "1.2",
  };

  const subTitleStyle = {
    fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
    fontWeight: 300,
    lineHeight: "1.6",
    maxWidth: "700px",
  };

  const buttonStyle = {
    transition:
      "background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease",
    textDecoration: "none",
    borderRadius: "50px",
    padding: "15px 100px",
    fontSize: "1.1rem",
  };

  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={textBox}>
        <h1 style={titleStyle}>Design Your Dream Washroom</h1>
        <p style={subTitleStyle}>
          Discover elegant designs and innovative features to create a washroom
          that reflects your style and comfort.
        </p>
        <a
          href="#Build-section-id"
          className="btn btn-outline-light"
          style={buttonStyle}
        >
          Start
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
