import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-primary shadow-[0_0_5px_1px_rgba(0,0,0,1),0_0_10px_3px_rgba(0,0,0,0.8),0_0_20px_5px_rgba(0,0,0,0.5)] z-[10000] flex items-center justify-center">
      <div className="w-full max-w-[1400px] px-4 flex items-center justify-between">
        
        {/* Logo y titulo */}
        <a
          className="flex items-center gap-2 flex-shrink-0 no-underline"
          href="/"
          data-track="event"
          data-category="Navigation"
          data-target="GoTo-Home"
          data-origin="from: header"
          aria-label="Ir a inicio"
        >
          <img
            src="/public/SmallRat.webp"
            alt="Logo Rata"
            className="w-10 h-10 block"
            width={40}
            height={40}
            loading="eager"
            decoding="sync"
          />
          <span className="default-font text-white text-4xl font-bold leading-10">
            ForoRata
          </span>
        </a>

        {/* Barra de búsqueda*/}
        <div className="flex items-center absolute left-1/2 -translate-x-1/2 w-full max-w-[480px]">
          <form className="flex w-full" role="search">
            <div className="flex flex-col w-full relative">
              <input
                className="default-font w-full h-10 pl-10 pr-4 rounded-lg bg-primary-light outline-none text-white transition-all duration-200 ease-in-out border-0 text-sm placeholder-white placeholder-opacity-70 focus:placeholder-opacity-100"
                type="search"
                name="searchbar"
                id="query"
                placeholder="Buscar un perfil"
                aria-label="Buscar perfiles de usuario"
                autoComplete="off"
                spellCheck="false"
              />
              <SearchIcon />
            </div>
          </form>
        </div>

        {/* Boton de login */}
        <a
          className="mx-0.5 flex items-center justify-center w-44 h-10 box-border bg-pink text-white rounded-full font-bold uppercase text-base no-underline transition-colors duration-100 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300"
          href="/login"
        >
          Iniciar Sesión
        </a>
      </div>
    </header>
  );
};

// Componente SVG separado 
const SearchIcon = () => (
  <svg
    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white opacity-70 pointer-events-none transition-all duration-200 ease-in-out"
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

export default Header;