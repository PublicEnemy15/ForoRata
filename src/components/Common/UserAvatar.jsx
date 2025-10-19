import React from 'react';

const UserAvatar = ({ 
  size = 'medium',
  onClick,
  className = '',
  ...props 
}) => {
  // Tamaños predefinidos que coinciden con el diseño original
  const sizes = {
    small: { wrapper: 'w-8 h-8', icon: 32 },
    medium: { wrapper: 'w-10 h-10 sm:w-12 sm:h-12', icon: 40, iconSm: 48 },
    large: { wrapper: 'w-12 h-12 sm:w-14 sm:h-14', icon: 48, iconSm: 56 },
  };

  const sizeConfig = sizes[size] || sizes.medium;

  return (
    <div 
      onClick={onClick}
      className={`
        flex items-center justify-center
        ${sizeConfig.wrapper}
        ${onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}
        ${className}
      `}
      style={{ color: 'var(--color-white)' }}
      aria-label="Avatar de usuario"
      {...props}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={sizeConfig.wrapper}
        style={{ color: 'var(--color-white)' }}
      >
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="10" r="3"/>
        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
      </svg>
    </div>
  );
};

export default UserAvatar;