import React, { useState } from 'react';

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex items-center w-full">
      <form className="flex w-full" role="search">
        <div className="flex flex-col w-full relative">
          <input
            className="default-font w-full h-10 pl-10 pr-4 rounded-lg bg-unselect outline-none text-white transition-all duration-200 ease-in-out border-0 text-sm placeholder-SecondaryText-PreHover focus:placeholder-transparent"
            type="text"
            name="q"
            placeholder="Buscar un perfil"
            aria-label="Buscar perfiles de usuario"
            autoComplete="off"
            spellCheck="false"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'}}
          />
          <SearchIcon isFocused={isFocused} />
        </div>
      </form>
    </div>
  );
};

// Componente SVG separado
const SearchIcon = ({ isFocused }) => (
  <svg
    className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-all duration-200 ease-in-out ${isFocused ? 'text-white' : 'text-SecondaryText-PreHover opacity-70'}`}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="10" cy="7" r="4" />
    <path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
    <circle cx="17" cy="17" r="3" />
    <path d="m21 21-1.9-1.9" />
  </svg>
);

export default SearchBar;