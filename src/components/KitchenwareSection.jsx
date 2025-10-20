import React from "react";

const KitchenwareSection = () => {
  const bgImage =
    "https://staging.swish.global/wp-content/uploads/2025/10/Klasso-KH-0300114-72-SWISH-Smart-Kitchen-Hood-Landing-Page-Banner.webp";

  const sectionStyle = {
    width: "100%",
    minHeight: "100vh", // prevents overflow on mobile
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    position: "relative",
    color: "#fff",
    textAlign: "start",
    overflow: "hidden",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.07)",
    background:
      "linear-gradient(90deg,rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
    zIndex: 1,
  };

  const textBox = {
    position: "relative",
    zIndex: 2,
    padding: "40px 20px",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "20px",
    marginLeft: "100px",
  };

  const titleStyle = {
    fontSize: "42px", // responsive font
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

  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={textBox}>
        <h1 style={titleStyle}>Design Your Dream Kitchen</h1>
        <p style={subTitleStyle}>
          Explore stylish designs and smart innovations to craft a kitchen that{" "}
          <br />
          perfectly matches your taste and enhances your comfort.
        </p>
      </div>
    </section>
  );
};

export default KitchenwareSection;
