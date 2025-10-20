import React, { useState, useEffect } from "react";

const KitchenwareSection = () => {
  const bgVideo =
    "https://staging.swish.global/wp-content/uploads/2025/10/Videos2025-10-18_135826_871.mp4";

  // Track window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Function-based responsive styles
  const getStyles = () => {
    // Default (desktop)
    let sectionMinHeight = "120vh";
    let textAlign = "left";
    let marginLeft = "6vw";
    let padding = "40px 20px";
    let fontSizeTitle = "48px";
    let fontSizeSubtitle = "18px";
    let btnPadding = "10px 50px";
    let overlayGradient =
      "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 100%)";

    // Adjust for tablets
    if (windowWidth < 992) {
      sectionMinHeight = "110vh";
      marginLeft = "4vw";
      fontSizeTitle = "36px";
      fontSizeSubtitle = "16px";
      btnPadding = "10px 40px";
      overlayGradient =
        "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1) 100%)";
    }

    // Adjust for mobile
    if (windowWidth < 768) {
      sectionMinHeight = "100vh";
      marginLeft = "3vw";
      fontSizeTitle = "28px";
      fontSizeSubtitle = "15px";
      btnPadding = "10px 35px";
      textAlign = "left";
    }

    // Smallest screens
    if (windowWidth < 480) {
      sectionMinHeight = "90vh";
      marginLeft = "30px";
      fontSizeTitle = "24px";
      fontSizeSubtitle = "14px";
      btnPadding = "8px 25px";
      padding = "30px 10px";
      textAlign = "left";
    }

    return {
      sectionStyle: {
        width: "100%",
        minHeight: sectionMinHeight,
        position: "relative",
        color: "#fff",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: windowWidth < 768 ? "center" : "flex-start",
        backgroundColor: "#000", // fallback
      },
      videoStyle: {
        position: "absolute",
        bottom: 0, // Show video from bottom
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 0,
        pointerEvents: "none",
        objectPosition: "center bottom",
      },
      overlayStyle: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        background: overlayGradient,
      },
      textBox: {
        position: "relative",
        zIndex: 2,
        padding,
        maxWidth: "900px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "20px",
        marginLeft,
        textAlign,
      },
      titleStyle: {
        fontSize: fontSizeTitle,
        fontWeight: 700,
        marginBottom: "10px",
        lineHeight: 1.12,
        textAlign,
      },
      subTitleStyle: {
        fontSize: fontSizeSubtitle,
        fontWeight: 400,
        lineHeight: 1.6,
        maxWidth: "700px",
      },
      buttonStyle: {
        backgroundColor: "#FEBE00",
        marginTop: "10px",
        border: "1px solid #FEBE00",
        color: "#000",
        fontWeight: 600,
        textDecoration: "none",
        borderRadius: "6px",
        padding: btnPadding,
        fontSize: fontSizeSubtitle,
        display: "inline-block",
      },
    };
  };

  const styles = getStyles();

  return (
    <section style={styles.sectionStyle} aria-label="Kitchenware hero section">
      {/* Video Background */}
      <video
        style={styles.videoStyle}
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      {/* Overlay */}
      <div style={styles.overlayStyle} />

      {/* Text Content */}
      <div style={styles.textBox}>
        <h1 style={styles.titleStyle}>Design Your Dream Kitchen</h1>
        <p style={styles.subTitleStyle}>
          Explore stylish designs and smart innovations to craft a kitchen that
          {windowWidth < 768 ? "" : <br />}
          perfectly matches your taste and enhances your comfort.
        </p>

        <a
          href="#Build-section-id"
          className="btn get-est"
          style={styles.buttonStyle}
          role="button"
        >
          Get the FREE Ultimate Planning Kit
        </a>
      </div>
    </section>
  );
};

export default KitchenwareSection;
