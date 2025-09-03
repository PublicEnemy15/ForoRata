import React, { useState, useEffect } from 'react';

const Menu = ({ activeSection: externalActiveSection, setActiveSection: externalSetActiveSection, userData: userDataProp }) => {
  const [internalActiveSection, setInternalActiveSection] = useState("inicio");
  
  const activeSection = externalActiveSection ?? internalActiveSection;

  const userData = typeof userDataProp === "string" ? JSON.parse(userDataProp) : userDataProp || {
    username: "Username",
    followers: 137,
    following: 547
  };

  // Escuchar cambios globales de sección
  useEffect(() => {
    const handleGlobalMenuChange = (event) => {
      const newSection = event.detail.section;
      console.log('Menu recibió cambio global:', newSection);
      
      // Actualizar estado interno si no tenemos control externo
      if (externalSetActiveSection) {
        externalSetActiveSection(newSection);
      } else {
        setInternalActiveSection(newSection);
      }
    };

    // Escuchar el evento global
    if (typeof window !== 'undefined') {
      window.addEventListener('global-menu-change', handleGlobalMenuChange);
      
      // Al montar, sincronizar con el estado global si existe
      const currentGlobalSection = window.globalMenuSection || 'inicio';
      if (currentGlobalSection !== activeSection) {
        if (externalSetActiveSection) {
          externalSetActiveSection(currentGlobalSection);
        } else {
          setInternalActiveSection(currentGlobalSection);
        }
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('global-menu-change', handleGlobalMenuChange);
      }
    };
  }, [externalSetActiveSection]);

  const baseButtonClasses = "flex items-center justify-center font-bold no-underline transition-all duration-200 h-8 sm:h-10 w-full sm:w-44 text-sm sm:text-lg focus:outline-none cursor-pointer";

  const getButtonStyle = (section) => {
    const isActive = activeSection === section;
    return {
      backgroundColor: isActive ? 'var(--color-accent2)' : '#32363F',
      color: 'var(--color-white)',
      boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)',
      borderRadius: '50px',
      border: 'none'
    };
  };

  const getPostButtonStyle = () => {
    return {
      backgroundColor: '#73A7DD',
      color: 'var(--color-white)',
      boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)',
      borderRadius: '50px',
      border: 'none'
    };
  };

  const darkenOnHoverHandlers = {
    onMouseEnter: (e) => { e.currentTarget.style.filter = 'brightness(0.85)'; },
    onMouseLeave: (e) => { e.currentTarget.style.filter = 'brightness(1)'; },
    onMouseDown: (e) => { e.currentTarget.style.filter = 'brightness(0.75)'; },
    onMouseUp: (e) => { e.currentTarget.style.filter = 'brightness(0.85)'; },
  };

  const handleButtonClick = (section) => {
    console.log('Botón clickeado:', section);
    
    // Actualizar estado local
    if (externalSetActiveSection) {
      externalSetActiveSection(section);
    } else {
      setInternalActiveSection(section);
    }
    
    // Sincronización global
    if (typeof window !== 'undefined') {
      // Guardar en variable global simple
      window.globalMenuSection = section;
      
      // Notificar a todas las instancias del menú
      window.dispatchEvent(new CustomEvent('global-menu-change', {
        detail: { section }
      }));
      
      // Notificar cambio de contenido principal (para tu sistema actual)
      window.dispatchEvent(new CustomEvent('main-content-change', {
        detail: { section }
      }));
      
      // Cerrar el menú móvil si existe
      const menuPanel = document.getElementById('menu-options-panel');
      const overlay = document.getElementById('panels-overlay');
      const menuBtn = document.getElementById('menu-options-btn');
      
      if (menuPanel && overlay && menuBtn) {
        setTimeout(() => {
          menuPanel.classList.add('-translate-x-full');
          overlay.classList.add('hidden');
          menuBtn.style.setProperty('background-color', '#32363F');
        }, 300);
      }
    }
  };

  return (
    <div className="w-full max-w-[360px] flex-shrink-0 flex flex-col gap-7">
      {/* --- Tarjeta 1: Info usuario + estadísticas --- */}
      <div
        style={{
          backgroundColor: '#202127',
          borderRadius: '10px',
          boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)',
          padding: '30px 24px',
        }}
      >
        <div className="flex flex-col items-center text-center space-y-5">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-12 h-12 text-white"
              >
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="10" r="3"/>
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
              </svg>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-medium" style={{color: 'var(--color-white)'}}>{userData.username}</span>
            </div>
          </div>

          {/* Seguidores y Seguidos*/}
          <div className="flex space-x-12 text-center">
            <div>
              <div className="font-bold text-lg" style={{color: 'var(--color-white)'}}>{userData.followers}</div>
              <div className="text-sm" style={{color: 'var(--color-SecondaryText-PreHover)'}}>Seguidores</div>
            </div>
            <div>
              <div className="font-bold text-lg" style={{color: 'var(--color-white)'}}>{userData.following}</div>
              <div className="text-sm" style={{color: 'var(--color-SecondaryText-PreHover)'}}>Seguidos</div>
            </div>
          </div>
          
          {/* Botón Post con estilo especial */}
          <button
            onClick={() => handleButtonClick('post')}
            className={baseButtonClasses}
            style={getPostButtonStyle()}
            {...darkenOnHoverHandlers}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h10M4 18h14"/>
            </svg>
            Post
          </button>
        </div>
      </div>

      {/* --- Tarjeta 2: Menú de navegación --- */}
      <div
        style={{
          backgroundColor: '#202127',
          borderRadius: '10px',
          boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)',
          padding: '20px',
        }}
        className="flex flex-col space-y-6 items-center"
      >
        <button
          onClick={() => handleButtonClick('inicio')}
          className={baseButtonClasses}
          style={getButtonStyle('inicio')}
          {...darkenOnHoverHandlers}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            </g>
          </svg>
          Inicio
        </button>

        <button
          onClick={() => handleButtonClick('seguidos')}
          className={baseButtonClasses}
          style={getButtonStyle('seguidos')}
          {...darkenOnHoverHandlers}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"/>
          </svg>
          Seguidos
        </button>

        <button
          onClick={() => handleButtonClick('perfil')}
          className={baseButtonClasses}
          style={getButtonStyle('perfil')}
          {...darkenOnHoverHandlers}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2">
            <path fill="currentColor" d="M12 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8zM6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8zm2 10a3 3 0 0 0-3 3a1 1 0 1 1-2 0a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5a1 1 0 1 1-2 0a3 3 0 0 0-3-3H8z"/>
          </svg>
          Perfil
        </button>

        <button
          onClick={() => handleButtonClick('configurar')}
          className={baseButtonClasses}
          style={getButtonStyle('configurar')}
          {...darkenOnHoverHandlers}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.05 6.462a2 2 0 0 0 2.63-1.519l.32-1.72a9 9 0 0 1 3.998 0l.322 1.72a2 2 0 0 0 2.63 1.519l1.649-.58a9 9 0 0 1 2.001 3.46l-1.33 1.14a2 2 0 0 0 0 3.037l1.33 1.139a9 9 0 0 1-2.001 3.46l-1.65-.58a2 2 0 0 0-2.63 1.519L14 20.777a9 9 0 0 1-3.998 0l-.322-1.72a2 2 0 0 0-2.63-1.519l-1.649.58a9 9 0 0 1-2.001-3.46l1.33-1.14a2 2 0 0 0 0-3.036L3.4 9.342a9 9 0 0 1 2-3.46zM12 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6" clipRule="evenodd"/>
          </svg>
          Configurar
        </button>

        <button
          onClick={() => handleButtonClick('salir')}
          className={baseButtonClasses}
          style={getButtonStyle('salir')}
          {...darkenOnHoverHandlers}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2">
            <g fill="currentColor">
              <path fillRule="evenodd" d="M11 20a1 1 0 0 0-1-1H5V5h5a1 1 0 1 0 0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5a1 1 0 0 0 1-1z" clipRule="evenodd"/>
              <path d="M21.714 12.7a.996.996 0 0 0 .286-.697v-.006a.997.997 0 0 0-.293-.704l-4-4a1 1 0 1 0-1.414 1.414L18.586 11H9a1 1 0 1 0 0 2h9.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4l.007-.007z"/>
            </g>
          </svg>
          Salir
        </button>
      </div>
    </div>
  );
};

export default Menu;