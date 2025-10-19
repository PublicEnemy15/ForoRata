import React, { useState, useEffect } from 'react';
import Button from '../Common/Button';
import Card from '../Common/Card';
import UserAvatar from '../Common/UserAvatar';
import { 
  HomeIcon, 
  FollowersIcon, 
  ProfileIcon, 
  SettingsIcon, 
  LogoutIcon,
  PostIcon 
} from '../Common/Icons';
import { MENU_ITEMS, DEFAULT_USER_DATA } from '../../constants/menuConfig';
import { changeMenuSection, getCurrentSection, closeMobilePanels, subscribeToMenuChanges } from '../../utils/globalEvents';

const Menu = ({ 
  activeSection: externalActiveSection = null,
  setActiveSection: externalSetActiveSection = null,
  userData: userDataProp 
}) => {
  const [internalActiveSection, setInternalActiveSection] = useState("inicio");
  
  const activeSection = externalActiveSection ?? internalActiveSection;

  // Parsear userData (puede venir como string desde Astro)
  const userData = typeof userDataProp === "string" 
    ? JSON.parse(userDataProp) 
    : userDataProp || DEFAULT_USER_DATA;

  // Mapeo de iconos para los items del menú
  const iconMap = {
    inicio: HomeIcon,
    seguidos: FollowersIcon,
    perfil: ProfileIcon,
    configurar: SettingsIcon,
    salir: LogoutIcon
  };

  // Sincronización con eventos globales
  useEffect(() => {
    const unsubscribe = subscribeToMenuChanges((newSection) => {
      console.log('Menu recibió cambio global:', newSection);
      
      if (externalSetActiveSection) {
        externalSetActiveSection(newSection);
      } else {
        setInternalActiveSection(newSection);
      }
    });

    // Sincronizar al montar
    const currentGlobalSection = getCurrentSection();
    if (currentGlobalSection !== activeSection) {
      if (externalSetActiveSection) {
        externalSetActiveSection(currentGlobalSection);
      } else {
        setInternalActiveSection(currentGlobalSection);
      }
    }

    return unsubscribe;
  }, [externalSetActiveSection]);

  // Handler para clicks en botones del menú
  const handleButtonClick = (section) => {
    console.log('Botón clickeado:', section);
    
    // Actualizar estado local
    if (externalSetActiveSection) {
      externalSetActiveSection(section);
    } else {
      setInternalActiveSection(section);
    }
    
    // Actualizar estado global y notificar
    changeMenuSection(section);
    
    // Cerrar menú móvil con delay
    setTimeout(() => {
      closeMobilePanels();
    }, 300);
  };

  return (
    <div className="w-full max-w-[360px] flex-shrink-0 flex flex-col gap-7">
      {/* Tarjeta 1: Información del usuario */}
      <Card padding="large">
        <div className="flex flex-col items-center text-center space-y-5">
          {/* Avatar y nombre */}
          <div className="flex items-center space-x-3">
            <UserAvatar size="medium" />
            <div className="flex flex-col items-start">
              <span className="font-medium text-white">
                {userData.username}
              </span>
            </div>
          </div>

          {/* Estadísticas: Seguidores y Seguidos */}
          <div className="flex space-x-12 text-center">
            <div>
              <div className="font-bold text-lg text-white">
                {userData.followers}
              </div>
              <div className="text-sm text-SecondaryText-PreHover">
                Seguidores
              </div>
            </div>
            <div>
              <div className="font-bold text-lg text-white">
                {userData.following}
              </div>
              <div className="text-sm" style={{ color: '#D868A0' }}>
                Seguidos
              </div>
            </div>
          </div>
          
          {/* Botón Post con estilo especial */}
          <Button
            onClick={() => handleButtonClick('post')}
            variant="menu-post"
            size="responsive"
            iconLeft={<PostIcon size={20} />}
          >
            Post
          </Button>
        </div>
      </Card>

      {/* Tarjeta 2: Menú de navegación */}
      <Card padding="default" className="flex flex-col space-y-6 items-center">
        {MENU_ITEMS.map((item) => {
          const Icon = iconMap[item.id];
          const isActive = activeSection === item.section;
          
          return (
            <Button
              key={item.id}
              onClick={() => handleButtonClick(item.section)}
              variant={isActive ? 'menu-active' : 'menu-inactive'}
              size="responsive"
              iconLeft={Icon && <Icon size={20} />}
            >
              {item.label}
            </Button>
          );
        })}
      </Card>
    </div>
  );
};

export default Menu;