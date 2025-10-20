import React from 'react';

const IconButton = ({ 
  onClick, 
  icon: Icon, 
  ariaLabel,
  className = "",
  size = "md",
  ...rest 
}) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  return (
    <button
      onClick={onClick}
      className={`${sizes[size]} flex items-center justify-center bg-unselect border border-select rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 ${className}`}
      style={{
        boxShadow: '0 2px 4px rgba(0,0,0,0.4), 0 3px 6px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2)'
      }}
      aria-label={ariaLabel}
      {...rest}
    >
      {Icon && <Icon className="text-white" />}
    </button>
  );
};

export default IconButton;