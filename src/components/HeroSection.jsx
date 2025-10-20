import React from "react";

const HeroSection = () => {
  const bgImage =
    "https://www.swish.global/wp-content/uploads/2024/01/bathware-solution-1-1.jpg"; // replace with your background image path

  const sectionStyle = {
    width: "100%",
    height: "100vh",
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
    padding: "20px",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  };

  const titleStyle = {
    fontSize: "3rem",
    fontWeight: 700,
    marginBottom: "20px",
  };

  const subTitleStyle = {
    fontSize: "1.3rem",
    fontWeight: 300,
    lineHeight: "1.6",
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
          className="btn btn-outline-light rounded-pill px-5 btn-lg"
          style={{
            transition:
              "background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease",
            textDecoration: "none", // ensure no underline
          }}
        >
          Start
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
