import React from "react";
import MultiStepForm from "./MultiStepForm";

const ContactSection = () => {
  return (
    <section
      id="Build-section-id"
      style={{
        textAlign: "center",
        backgroundColor: "#f0f4fa",
        padding: "clamp(40px, 8vw, 100px)", // responsive padding
      }}
    >
      <h2
        style={{
          fontWeight: 600,
          marginBottom: "60px",
          fontSize: "clamp(1.5rem, 3vw, 2.2rem)", // responsive font
          lineHeight: "1.3",
          maxWidth: "900px",
          marginInline: "auto", // centers the text block properly
        }}
      >
        Ready to Build Your Dream Kitchen & Bathroom?
      </h2>

      <MultiStepForm />
    </section>
  );
};

export default ContactSection;
