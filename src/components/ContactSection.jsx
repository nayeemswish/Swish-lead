import React from "react";
import MultiStepForm from "./MultiStepForm";

const ContactSection = () => {
  return (
    <section
      style={{
        textAlign: "center",
        backgroundColor: "#f0f4fa",
        padding: "100px",
      }}
    >
      <h2
        style={{ fontSize: "1.8rem", fontWeight: "600", marginBottom: "20px" }}
      >
        Ready to Build Your Dream Kitchen & Bathroom?
      </h2>
      <button
        style={{
          padding: "14px 26px",
          backgroundColor: "#f9b100",
          border: "none",
          borderRadius: "6px",
          color: "#1c1c1c",
          fontWeight: "500",
          fontSize: "1rem",
        }}
      >
        Get My FREE Planning Kit →
      </button>

      <MultiStepForm></MultiStepForm>
    </section>
  );
};

export default ContactSection;
