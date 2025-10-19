import React, { useState, useEffect } from 'react';
import Card from '../Common/Card';
import PostCard from './PostCard';
import FollowCard from './FollowCard';
import Menu from './Menu';
import PanelConfiguracion from '../Main/PanelConfiguracion';
import { getCurrentSection, changeMenuSection, subscribeToMenuChanges } from '../../utils/globalEvents';
import { DEFAULT_USER_DATA } from '../../constants/menuConfig';
const InicioSection = () => (
  <Card padding="default" className="mt-20 sm:mt-24 lg:mt-0">
    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
      🏠 Inicio
    </h2>
    <p className="text-sm sm:text-base text-white">
      Bienvenido a la sección de inicio. Aquí verás las últimas actualizaciones y contenido principal.
    </p>
  </Card>
);

const SeguidosSection = () => (
  <Card padding="default" className="mt-20 sm:mt-24 lg:mt-0">
    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
      👥 Seguidos
    </h2>
    <p className="text-sm sm:text-base text-white">
      Aquí podrás ver las publicaciones de las personas que sigues.
    </p>
  </Card>
);

const PerfilSection = () => <PostCard />;

const ConfigurarSection = () => <PanelConfiguracion />;

const SalirSection = () => (
  <Card padding="default" className="mt-20 sm:mt-24 lg:mt-0">
    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
      🚪 Salir
    </h2>
    <p className="text-sm sm:text-base mb-4 text-white">
      ¿Estás seguro que quieres cerrar sesión?
    </p>
    <button 
      className="px-4 sm:px-6 py-2 rounded-lg transition-colors font-bold text-sm sm:text-base bg-red-600 text-white shadow-[0_4px_4px_rgba(0,0,0,0.6)] hover:bg-red-700"
    >
      Cerrar Sesión
    </button>
  </Card>
);

const PostSection = () => (
  <Card padding="default" className="mt-20 sm:mt-24 lg:mt-0">
    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
      ✍️ Crear Post
    </h2>
    <p className="text-sm sm:text-base text-white">
      Aquí podrás crear y publicar nuevos posts.
    </p>
    {/* Aquí irá el formulario de creación de posts */}
  </Card>
);

// ========== COMPONENTE PRINCIPAL ==========

const UserCard = () => {
  const [activeSection, setActiveSection] = useState(() => {
    return getCurrentSection();
  });

  const userData = DEFAULT_USER_DATA;

  // Sincronización con eventos globales
  useEffect(() => {
    const unsubscribe = subscribeToMenuChanges((newSection) => {
      console.log('UserCard recibió cambio global:', newSection);
      setActiveSection(newSection);
    });

    // Verificar estado global al montar
    const currentGlobalSection = getCurrentSection();
    if (currentGlobalSection !== activeSection) {
      setActiveSection(currentGlobalSection);
    }

    return unsubscribe;
  }, []);

  // Handler local para cambios de sección
  const handleSectionChange = (newSection) => {
    console.log('UserCard cambio local:', newSection);
    setActiveSection(newSection);
    changeMenuSection(newSection);
  };

  // Renderizar la sección activa
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
      {/* Layout Desktop (≥1024px) */}
      <div className="hidden lg:flex lg:items-start gap-[30px]">
        {/* Menú lateral izquierdo */}
        <Menu 
          activeSection={activeSection}
          setActiveSection={handleSectionChange}
          userData={userData}
        />

        {/* Contenido central dinámico */}
        <div className="w-[614px]">
          {renderActiveSection()}
        </div>

        {/* Panel derecho: Últimos seguidores */}
        <div className="w-[360px]">
          <FollowCard />
        </div>
      </div>

      {/* Layout Móvil/Tablet (<1024px) */}
      <div className="lg:hidden">
        {renderActiveSection()}
      </div>
    </div>
  );
};

export default UserCard;