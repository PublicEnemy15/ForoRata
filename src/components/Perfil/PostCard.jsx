import React from 'react';
import Card, { UserMiniCard } from '../Common/Card';
import Button from '../Common/Button';
import UserAvatar from '../Common/UserAvatar';
import { EditIcon, SettingsIcon } from '../Common/Icons';
import { MOCK_FOLLOWING } from '../../constants/menuConfig';

const PostCard = () => {
  return (
    <div className="space-y-4 p-2 sm:p-0 mt-20 sm:mt-24 lg:mt-0">
      {/* Card principal del perfil */}
      <Card padding="default">
        {/* Header: Usuario + Botones de acción */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 space-y-3 sm:space-y-0">
          {/* Sección izquierda: Avatar + Username */}
          <div className="flex items-center space-x-3">
            <UserAvatar size="medium" />
            <div>
              <p className="font-medium text-base sm:text-lg text-white">
                Username
              </p>
            </div>
          </div>

          {/* Sección derecha: Botones de editar y configuración */}
          <div className="flex items-center space-x-2">
            <Button
              variant="icon-button"
              size="square"
              ariaLabel="Editar perfil"
              iconLeft={<EditIcon size={16} className="text-white" />}
            />
            <Button
              variant="icon-button"
              size="square"
              ariaLabel="Configuración"
              iconLeft={<SettingsIcon size={16} className="text-white" />}
            />
          </div>
        </div>

        {/* Contenido/Bio del usuario */}
        <div className="mb-4 sm:mb-6">
          <p className="text-sm sm:text-base leading-relaxed text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales maximus faucibus. Sed vitae non.
          </p>
        </div>

        {/* Estadísticas: Seguidores y Seguidos */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-8">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="font-medium text-sm sm:text-base text-white">
              137
            </span>
            <span className="text-sm sm:text-base text-SecondaryText-PreHover">
              Seguidores
            </span>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="font-medium text-sm sm:text-base text-white">
              547
            </span>
            <span className="text-sm sm:text-base" style={{ color: '#D868A0' }}>
              Seguidos
            </span>
          </div>
        </div>
      </Card>

      {/* Grid de usuarios seguidos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {MOCK_FOLLOWING.map((follower) => (
          <UserMiniCard 
            key={follower.id} 
            username={follower.username}
            avatar={<UserAvatar size="small" />}
          />
        ))}
      </div>
    </div>
  );
};

export default PostCard;