import React from 'react';

import animationData from "/src/assets/animations/Programming.json";


const MainApplication = ({ children }: MainApplicationProps) => {
  return (
    <div className="layout">
      {children}
    </div>
  );
};

export default MainApplication;


