import React from "react";
import MultiStepForm from "./MultiStepForm";

const ContactSection = () => {
  return (
    <section
      id="Build-section-id"
      style={{
        textAlign: "center",
        backgroundColor: "#f0f4fa",
        padding: "100px",
      }}
    >
      <h2 style={{ fontWeight: "600", marginBottom: "80px" }}>
        Ready to Build Your Dream Kitchen & Bathroom?
      </h2>

      <MultiStepForm></MultiStepForm>
    </section>
  );
};

export default ContactSection;
