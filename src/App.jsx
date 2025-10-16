import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import TrustSection from "./components/TrustSection";
import PlanningKitSection from "./components/PlanningKitSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import heroImage from "./assets/hero-bg.webp";

function App() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <PlanningKitSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
