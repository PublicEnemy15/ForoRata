
import React from 'react';

const MainContainer = ({ children, className = "", ...props }) => {
  return (
    <div className="flex justify-center w-full" {...props}>
      <div className={`w-full max-w-[1389px] ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default MainContainer;