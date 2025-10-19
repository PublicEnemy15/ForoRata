import React from 'react';

// Card principal reutilizable
const Card = ({ 
  children, 
  className = '', 
  padding = 'default',
  hover = false,
  onClick,
  ...props 
}) => {
  // Variantes de padding
  const paddings = {
    none: 'p-0',
    small: 'px-3 sm:px-5 py-3',
    default: 'px-4 py-4 sm:px-6 sm:py-6',
    large: 'p-6 sm:p-8',
  };

  const baseClasses = `
    w-full 
    rounded-lg 
    bg-CardBackground
    shadow-[0_4px_4px_rgba(0,0,0,0.6)]
    ${paddings[padding]}
    ${hover ? 'transition-all duration-200 hover:brightness-110' : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `;

  return (
    <div 
      className={baseClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

// CardHeader - Header con fondo especial (para FollowCard)
export const CardHeader = ({ children, className = '', icon: Icon }) => (
  <div 
    className={`rounded-lg px-4 py-4 flex items-center justify-center gap-3 ${className}`}
    style={{ 
      backgroundColor: 'var(--color-unselect)', 
      boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)' 
    }}
  >
    {Icon && <Icon />}
    {children}
  </div>
);

// UserMiniCard - Tarjeta compacta de usuario (para FollowCard)
export const UserMiniCard = ({ 
  username, 
  avatar,
  onClick, 
  rightContent,
  className = '' 
}) => (
  <div 
    onClick={onClick}
    className={`rounded-lg px-3 sm:px-5 py-3 flex items-center justify-between transition-all duration-200 hover:brightness-110 ${onClick ? 'cursor-pointer' : ''} ${className}`}
    style={{ 
      backgroundColor: 'var(--color-CardBackground)',
      boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'
    }}
  >
    <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
      {avatar}
      <span className="text-sm font-medium truncate" style={{ color: 'var(--color-white)' }}>
        {username}
      </span>
    </div>
    {rightContent && (
      <div className="flex-shrink-0">
        {rightContent}
      </div>
    )}
  </div>
);

export default Card;