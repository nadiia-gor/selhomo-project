import React from 'react';
import MyComponents from './Styles';

const Logo = () => {
  return (
    <MyComponents.FlexRow style={{ alignItems: 'center', gap: '7px' }}>
      <img
        src="src/assets/images/logo.svg"
        alt="logo"
        style={{ width: '50px', height: '50px' }}
      />
      <h2 style={{ margin: 0 }}>SELHONO</h2>
    </MyComponents.FlexRow>
  );
};

export default Logo;
