import React from "react";
import kitImage from "../assets/planning-kit.jpg";

const PlanningKitSection = () => {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "50px",
        backgroundColor: "#fff",
        paddingBottom: "100px",
      }}
    >
      <img
        src={kitImage}
        alt="Planning Kit"
        style={{
          width: "400px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      />
      <div style={{ maxWidth: "450px" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          What's Inside Your{" "}
          <span style={{ color: "#f9b100" }}>FREE Planning Kit</span>
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            color: "#555",
            lineHeight: "1.8",
          }}
        >
          <li>📏 Measurement templates that prevent costly errors</li>
          <li>💰 Budget calculator (save &#2547; 2-5 lakhs on average)</li>
          <li>🕒 Perfect construction timeline planner</li>
          <li>🏷️ Exclusive supplier discount codes</li>
          <li>🎁 30-min free design consultation</li>
        </ul>
      </div>
    </section>
  );
};

export default PlanningKitSection;
