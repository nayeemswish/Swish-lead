import React from "react";

const Header = ({ title }) => {
  return (
    <header style={{ textAlign: "center", margin: "20px 0" }}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
