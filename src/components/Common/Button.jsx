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
  const baseStyles = "box-border items-center justify-center font-bold no-underline transition-colors duration-100 focus:outline-none focus:ring-2";
 
  // Variantes de tamanio
  const sizes = {
    'default': "h-10 w-44 text-lg rounded-[20px] border-2", // Tamanio original
    'square': "h-10 w-10 text-base rounded-[10px]", // Boton de seguir 40x40
    'small': "h-8 w-32 text-base rounded-[20px] border-2",
    'large': "h-12 w-52 text-xl rounded-[20px] border-2"
  };
 
  // Variantes de color
  const variants = {
    'Boton-rellenado-accent2': "border-accent2 bg-accent2 text-white hover:bg-accent2-600 focus:ring-accent2", //todo rellenado de rosado
    'Boton-borde-accent2': "border-accent2 bg-transparent text-accent2 hover:bg-accent2 hover:text-white focus:ring-accent2", //borde rosado  
      
    'Boton-rellenado-accent1': "border-accent1 bg-accent1 text-white hover:bg-accent1-600 focus:ring-accent1", //todo rellenado de celeste
    'Boton-borde-accent1': "border-accent1 bg-transparent text-accent1 hover:bg-accent1 hover:text-white focus:ring-accent1", //borde celeste
    
    // Nuevas variantes para el boton de seguir
    'follow-unselected': "bg-unselect hover:bg-select border-none", // Estado no siguiendo
    'follow-selected': "bg-select border-none" // Estado siguiendo
  };
 
  const buttonClasses = `flex ${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;
 
  // Props comunes para ambos elementos
  const commonProps = {
    className: buttonClasses,
    'aria-label': ariaLabel,
    'data-track': dataTrack ? "event" : undefined,
    'data-category': dataTrack?.category,
    'data-target': dataTrack?.target,
    'data-origin': dataTrack?.origin,
    ...rest
  };
 
  // Si tiene href, renderiza <a> (navegacion)
  if (href) {
    return (
      <a href={href} {...commonProps}>
        {iconLeft}
        {children}
        {iconRight}
      </a>
    );
  }
 
  // Si no tiene href, renderiza <button> (interactividad)
  return (
    <button onClick={onClick} {...commonProps}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
};

export default Button;