import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const bgImage =
    "https://www.swish.global/wp-content/uploads/2025/10/Bathward-hero.webp";

  // Track window width for responsive adjustments
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Responsive style generator
  const getStyles = () => {
    let fontSize = "42px";
    let subFont = "18px";
    let marginLeft = "100px";
    let padding = "40px 20px";
    let btnPadding = "10px 50px";
    let alignItems = "center";

    if (windowWidth < 992) {
      fontSize = "32px";
      subFont = "16px";
      marginLeft = "50px";
      btnPadding = "10px 35px";
    }

    if (windowWidth < 768) {
      fontSize = "26px";
      subFont = "15px";
      marginLeft = "30px";
      padding = "30px 15px";
      alignItems = "end";
    }

    if (windowWidth < 480) {
      fontSize = "22px";
      subFont = "14px";
      marginLeft = "20px";
      btnPadding = "8px 25px";
      alignItems = "end";
    }

    return {
      sectionStyle: {
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems,
        justifyContent: "start",
        position: "relative",
        color: "#fff",
        textAlign: "start",
        overflow: "hidden",
      },
      overlayStyle: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(90deg,rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.1) 100%)",
        zIndex: 1,
      },
      textBox: {
        position: "relative",
        marginLeft,
        zIndex: 2,
        padding,
        maxWidth: "900px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "10px",
      },
      titleStyle: {
        fontSize,
        fontWeight: 700,
        lineHeight: "1.2",
      },
      subTitleStyle: {
        fontSize: subFont,
        fontWeight: 400,
        lineHeight: "1.6",
        maxWidth: "700px",
      },
      buttonStyle: {
        backgroundColor: "#FEBE00",
        marginTop: "10px",
        border: "1px solid #FEBE00",
        color: "#000",
        fontWeight: "600",
        textDecoration: "none",
        borderRadius: "6px",
        padding: btnPadding,
        fontSize: subFont,
      },
    };
  };

  const styles = getStyles();

  return (
    <section style={styles.sectionStyle}>
      <div
        style={{
          position: "absolute",
          left: windowWidth < 480 ? "20px" : "150px",
          top: "30px",
          zIndex: "99999",
        }}
      >
        <img
          src="https://www.swish.global/wp-content/uploads/2024/01/Swiss-Logo-3-1-1.png"
          alt="SWISH"
          style={{ width: windowWidth < 480 ? "120px" : "150px" }}
        />
      </div>

      <div style={styles.overlayStyle}></div>

      <div style={styles.textBox}>
        <h1 style={styles.titleStyle}>
          Design the Future of Your Home <br />
          <span style={{ color: "#FEBE00" }}>
            Without the Expensive Regrets
          </span>
        </h1>
        <p style={styles.subTitleStyle}>
          Trusted by architects & dream-home builders across the country.
        </p>
        <a
          href="#Build-section-id"
          className="btn get-est"
          style={styles.buttonStyle}
        >
          Get the FREE Ultimate Planning Kit
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
