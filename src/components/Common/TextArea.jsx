import React from 'react';

const TextArea = ({
  value,
  onChange,
  placeholder,
  maxLength = 100,
  showCounter = true,
  className = "",
  ariaLabel,
  rows = 3,
  ...rest
}) => {
  return (
    <div className="relative w-full">
      <textarea
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
        rows={rows}
        className={` ${className} w-full px-3 py-2 bg-unselect text-white border border-unselect rounded-lg resize-none outline-none transition-colors duration-200 placeholder-SecondaryText-PreHover focus:border-select focus:placeholder-transparent ${className}`}
        aria-label={ariaLabel}
        {...rest}
      />
      {showCounter && (
  <span className="counter" aria-live="polite">
    {value.length}/{maxLength}
  </span>
)}

    </div>
  );
};

export default TextArea;