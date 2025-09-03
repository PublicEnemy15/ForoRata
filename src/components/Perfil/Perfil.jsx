import React, { useState, useEffect } from 'react';
import PostCard from '../Perfil/PostCard';
import FollowCard from '../Perfil/FollowCard';
import SidebarMenu from './Menu';

// Secciones
const InicioSection = () => (
  <div className="w-full rounded-lg p-4 sm:p-6 mt-20 sm:mt-24 lg:mt-0" style={{backgroundColor: '#202127', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'}}>
    <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{color: 'var(--color-white)'}}>🏠 Inicio</h2>
    <p className="text-sm sm:text-base" style={{color: 'var(--color-white)'}}>Bienvenido a la sección de inicio. Aquí verás las últimas actualizaciones y contenido principal.</p>
  </div>
);

const SeguidosSection = () => (
  <div className="w-full rounded-lg p-4 sm:p-6 mt-20 sm:mt-24 lg:mt-0" style={{backgroundColor: '#202127', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'}}>
    <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{color: 'var(--color-white)'}}>👥 Seguidos</h2>
    <p className="text-sm sm:text-base" style={{color: 'var(--color-white)'}}>Aquí podrás ver las publicaciones de las personas que sigues.</p>
  </div>
);


const PerfilSection = () => <PostCard />;

const ConfigurarSection = () => (
  <div className="w-full rounded-lg p-4 sm:p-6 mt-20 sm:mt-24 lg:mt-0" style={{backgroundColor: '#202127', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'}}>
    <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{color: 'var(--color-white)'}}>⚙️ Configuración</h2>
    <div className="space-y-4">
      <div className="p-3 sm:p-4 rounded-lg" style={{backgroundColor: 'var(--color-unselect)'}}>
        <h3 className="font-semibold mb-2 text-sm sm:text-base" style={{color: 'var(--color-white)'}}>Privacidad</h3>
        <p className="text-xs sm:text-sm" style={{color: 'var(--color-SecondaryText-PreHover)'}}>Configura tus opciones de privacidad</p>
      </div>
      <div className="p-3 sm:p-4 rounded-lg" style={{backgroundColor: 'var(--color-unselect)'}}>
        <h3 className="font-semibold mb-2 text-sm sm:text-base" style={{color: 'var(--color-white)'}}>Notificaciones</h3>
        <p className="text-xs sm:text-sm" style={{color: 'var(--color-SecondaryText-PreHover)'}}>Gestiona tus notificaciones</p>
      </div>
    </div>
  </div>
);

const SalirSection = () => (
  <div className="w-full rounded-lg p-4 sm:p-6 mt-20 sm:mt-24 lg:mt-0" style={{backgroundColor: '#202127', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'}}>
    <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{color: 'var(--color-white)'}}>🚪 Salir</h2>
    <p className="text-sm sm:text-base mb-4" style={{color: 'var(--color-white)'}}>¿Estás seguro que quieres cerrar sesión?</p>
    <button 
      className="px-4 sm:px-6 py-2 rounded-lg transition-colors font-bold text-sm sm:text-base"
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
const PostSection = () => (
  <div className="w-full rounded-lg p-4 sm:p-6 mt-20 sm:mt-24 lg:mt-0" style={{backgroundColor: '#202127', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'}}>
    <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{color: 'var(--color-white)'}}>✍️ Crear Post</h2>
    <p className="text-sm sm:text-base" style={{color: 'var(--color-white)'}}>Aquí podrás crear y publicar nuevos posts.</p>
    {/* Aquí irá el contenido del post */}
  </div>
);

const UserCard = () => {
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.globalMenuSection || 'inicio';
    }
    return 'inicio';
  });

  const userData = {
    username: "Username",
    followers: 137,
    following: 547
  };

  // Escuchar cambios globales del menú
  useEffect(() => {
    const handleGlobalMenuChange = (event) => {
      const newSection = event.detail.section;
      console.log('UserCard recibió cambio global:', newSection);
      setActiveSection(newSection);
    };

    const handleMainContentChange = (event) => {
      const newSection = event.detail.section;
      console.log('UserCard recibió cambio de contenido:', newSection);
      setActiveSection(newSection);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('global-menu-change', handleGlobalMenuChange);
      window.addEventListener('main-content-change', handleMainContentChange);
      
      const currentGlobalSection = window.globalMenuSection;
      if (currentGlobalSection && currentGlobalSection !== activeSection) {
        setActiveSection(currentGlobalSection);
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('global-menu-change', handleGlobalMenuChange);
        window.removeEventListener('main-content-change', handleMainContentChange);
      }
    };
  }, []);

  const handleSectionChange = (newSection) => {
    console.log('UserCard cambio local:', newSection);
    setActiveSection(newSection);
  
    if (typeof window !== 'undefined') {
      window.globalMenuSection = newSection;
      window.dispatchEvent(new CustomEvent('global-menu-change', {
        detail: { section: newSection }
      }));
    }
  };

  const renderActiveSection = () => {
    switch(activeSection) {
      case 'inicio': return <InicioSection />;
      case 'seguidos': return <SeguidosSection />;
      case 'perfil': return <PerfilSection />;
      case 'configurar': return <ConfigurarSection />;
      case 'salir': return <SalirSection />;
      case 'post': return <PostSection />;
      default: return <InicioSection />;
    }
  };

  return (
    <div className="pt-16 sm:pt-[100px] p-2 sm:p-0 pb-20 lg:pb-0">
      <div className="hidden lg:flex lg:items-start gap-[30px]">
        <SidebarMenu 
          activeSection={activeSection}
          setActiveSection={handleSectionChange}
          userData={userData}
        />

        {/* Contenido dinámico */}
        <div className="w-[614px]">
          {renderActiveSection()}
        </div>

        {/* FollowCard al lado derecho */}
        <div className="w-[360px]">
          <FollowCard />
        </div>
      </div>

      {/* Layout Móvil */}
      <div className="lg:hidden">
        {/* Contenido principal en móvil */}
        <div className="mb-4">
          {renderActiveSection()}
        </div>
        
        {/* Debug info solo en móvil
        <div className="text-xs text-white p-2 bg-gray-800 rounded mt-4">
          Sección activa (móvil): {activeSection}
        </div> */}
      </div>
    </div>
  );
};

export default UserCard;