// import React from 'react';
import MyComponents from "../MyComponents";
import "./Logo.scss";

const Logo = () => {
  return (
    <MyComponents.FlexRow className="logo--container">
      <img src="images/logo.svg" alt="logo" />
      <p style={{ margin: 0 }}>SELHONO</p>
    </MyComponents.FlexRow>
  );
};

export default Logo;
