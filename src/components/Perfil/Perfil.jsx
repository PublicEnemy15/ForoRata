import React, { useState } from 'react';
import PostCard from '../Perfil/PostCard';
import FollowCard from '../Perfil/FollowCard';
import PanelConfiguracion from '../Main/PanelConfiguracion';
import Header from '../Common/Header.astro';

// Secciones
const InicioSection = () => (
  <div className="w-full rounded-lg p-6" style={{backgroundColor: 'var(--color-CardBackground)', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'}}>
    <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-white)'}}>🏠 Inicio</h2>
    <p className="text-base" style={{color: 'var(--color-white)'}}>Bienvenido a la sección de inicio. Aquí verás las últimas actualizaciones y contenido principal.</p>
  </div>
);

const SeguidosSection = () => (
  <div className="w-full rounded-lg p-6" style={{backgroundColor: 'var(--color-CardBackground)', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'}}>
    <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-white)'}}>👥 Seguidos</h2>
    <p className="text-base" style={{color: 'var(--color-white)'}}>Aquí podrás ver las publicaciones de las personas que sigues.</p>
  </div>
);

const PerfilSection = () => <PostCard />;

const ConfigurarSection = () => (
  <div 
    style={{
      position: 'absolute',
      top: '91px',   // distancia Y
      left: '653px', // distancia X
      zIndex: 50
    }}
  >
    <PanelConfiguracion />
  </div>
);


const SalirSection = () => (
  <div className="w-full rounded-lg p-6" style={{backgroundColor: 'var(--color-CardBackground)', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'}}>
    <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-white)'}}>🚪 Salir</h2>
    <p className="text-base mb-4" style={{color: 'var(--color-white)'}}>¿Estás seguro que quieres cerrar sesión?</p>
    <button 
      className="px-6 py-2 rounded-lg transition-colors font-bold"
      style={{
        backgroundColor: '#dc2626',
        color: 'var(--color-white)',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b91c1c'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
    >
      Cerrar Sesión
    </button>
  </div>
);

const UserCard = () => {
  const [activeSection, setActiveSection] = useState('perfil');

  const baseButtonClasses = "flex items-center justify-center font-bold no-underline transition-all duration-200 h-10 w-44 text-lg focus:outline-none cursor-pointer";

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

  const userData = {
    username: "Username",
    followers: 137,
    following: 547
  };

  const renderActiveSection = () => {
    switch(activeSection) {
      case 'inicio': return <InicioSection />;
      case 'seguidos': return <SeguidosSection />;
      case 'perfil': return <PerfilSection />;
      case 'configurar': return <ConfigurarSection />;
      case 'salir': return <SalirSection />;
      default: return <PerfilSection />;
    }
  };

  const darkenOnHoverHandlers = {
    onMouseEnter: (e) => { e.currentTarget.style.filter = 'brightness(0.85)'; },
    onMouseLeave: (e) => { e.currentTarget.style.filter = 'brightness(1)'; },
    onMouseDown:  (e) => { e.currentTarget.style.filter = 'brightness(0.75)'; },
    onMouseUp:    (e) => { e.currentTarget.style.filter = 'brightness(0.85)'; },
  };

  return (
    <div className="pt-[100px]">
      <div className="flex items-start gap-[30px]">
        
        {/* Panel lateral con dos tarjetas */}
        <div className="w-[360px] flex-shrink-0 flex flex-col gap-6">
          
          {/* --- Tarjeta 1: Info usuario + estadísticas --- */}
          <div
            style={{
              backgroundColor: 'var(--color-CardBackground)',
              borderRadius: '10px',
              boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)',
              padding: '30px 24px',
            }}
          >
            <div className="flex flex-col items-center text-center space-y-4">
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
            </div>
          </div>

          {/* --- Tarjeta 2: Menú de navegación --- */}
          <div
            style={{
              backgroundColor: 'var(--color-CardBackground)',
              borderRadius: '10px',
              boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)',
              padding: '20px',
            }}
            className="flex flex-col space-y-4 items-center"
          >
            <button
              onClick={() => setActiveSection('inicio')}
              className={baseButtonClasses}
              style={getButtonStyle('inicio')}
              {...darkenOnHoverHandlers}
            >
              🏠 Inicio
            </button>

            <button
              onClick={() => setActiveSection('seguidos')}
              className={baseButtonClasses}
              style={getButtonStyle('seguidos')}
              {...darkenOnHoverHandlers}
            >
              👥 Seguidos
            </button>

            <button
              onClick={() => setActiveSection('perfil')}
              className={baseButtonClasses}
              style={getButtonStyle('perfil')}
              {...darkenOnHoverHandlers}
            >
              👤 Perfil
            </button>

            <button
              onClick={() => setActiveSection('configurar')}
              className={baseButtonClasses}
              style={getButtonStyle('configurar')}
              {...darkenOnHoverHandlers}
            >
              ⚙️ Configurar
            </button>

            <button
              onClick={() => setActiveSection('salir')}
              className={baseButtonClasses}
              style={getButtonStyle('salir')}
              {...darkenOnHoverHandlers}
            >
              🚪 Salir
            </button>
          </div>
        </div>

        {/* Contenido dinámico */}
        <div className="w-[614px]">
          {renderActiveSection()}
        </div>

        {/* FollowCard al lado derecho */}
        <div className="w-[360px]">
          <FollowCard />
        </div>
      </div>
    </div>
  );
};

export default UserCard;