import React from 'react';

const Button = ({
  href,
  variant = 'Boton-rellenado-accent2',
  size = 'default',
  children,
  className = '',
  ariaLabel,
  dataTrack,
  iconLeft = null,
  iconRight = null,
  onClick = null,
  ...rest
}) => {
 
  // Estilos base
  const baseStyles = "box-border flex items-center justify-center font-bold no-underline transition-all duration-200 focus:outline-none cursor-pointer";
  
  // Variantes de tamaño
  const sizes = {
    'default': "h-10 w-44 text-lg rounded-[20px] border-2",
    'square': "w-8 h-8 sm:w-10 sm:h-10 text-base rounded-lg",
    'small': "h-8 w-32 text-base rounded-[20px] border-2",
    'large': "h-12 w-52 text-xl rounded-[20px] border-2",
    'responsive': "h-8 sm:h-10 w-full sm:w-44 text-sm sm:text-lg rounded-[50px]"
  };
 
  // Variantes de color
  const variants = {
    'Boton-rellenado-accent2': "border-accent2 bg-accent2 text-white hover:brightness-85",
    'Boton-borde-accent2': "border-accent2 bg-transparent text-accent2 hover:bg-accent2 hover:text-white",
      
    'Boton-rellenado-accent1': "border-accent1 bg-accent1 text-white hover:brightness-85",
    'Boton-borde-accent1': "border-accent1 bg-transparent text-accent1 hover:bg-accent1 hover:text-white",
    
    // Variantes para el botón de seguir
    'follow-unselected': "bg-unselect hover:brightness-85 border-none text-white shadow-[0_4px_4px_rgba(0,0,0,0.6)]",
    'follow-selected': "border-none text-white shadow-[0_4px_4px_rgba(0,0,0,0.6)] hover:brightness-85",
    
    // Variantes para el menú
    'menu-active': "bg-accent2 text-white hover:brightness-85 border-none shadow-[0_4px_4px_rgba(0,0,0,0.6)]",
    'menu-inactive': "bg-unselect text-white hover:brightness-85 border-none shadow-[0_4px_4px_rgba(0,0,0,0.6)]",
    'menu-post': "bg-[#73A7DD] text-white hover:brightness-85 border-none shadow-[0_4px_4px_rgba(0,0,0,0.6)]",
    'icon-button': "bg-unselect text-white hover:brightness-85 border-none shadow-[0_4px_4px_rgba(0,0,0,0.6)] rounded-lg"
  };

  // Estilo especial para follow-selected (verde)
  const getInlineStyle = () => {
    if (variant === 'follow-selected') {
      return { backgroundColor: '#4CAF50' };
    }
    return {};
  };
 
  const buttonClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;
 
  // Props comunes
  const commonProps = {
    className: buttonClasses,
    style: getInlineStyle(),
    'aria-label': ariaLabel,
    'data-track': dataTrack ? "event" : undefined,
    'data-category': dataTrack?.category,
    'data-target': dataTrack?.target,
    'data-origin': dataTrack?.origin,
    ...rest
  };
 
  // Renderizar <a> si tiene href
  if (href) {
    return (
      <a href={href} {...commonProps}>
        {iconLeft && <span className="mr-2">{iconLeft}</span>}
        {children}
        {iconRight && <span className="ml-2">{iconRight}</span>}
      </a>
    );
  }
 
  // Renderizar <button> por defecto
  return (
    <button onClick={onClick} {...commonProps}>
      {iconLeft && iconLeft}
      {children}
      {iconRight && iconRight}
    </button>
  );
};

export default Button;