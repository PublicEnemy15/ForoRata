import React from 'react';

const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  ariaLabel,
  maxLength,
  ...rest
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      className={` ${className} px-3 py-2 bg-unselect text-white border border-unselect rounded-lg outline-none transition-colors duration-200 placeholder-SecondaryText-PreHover focus:border-select focus:placeholder-transparent`}
      aria-label={ariaLabel}
      {...rest}
    />
  );
};

export default Input;