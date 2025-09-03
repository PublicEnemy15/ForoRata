import React, { useState } from 'react';

const PostCard = () => {
  // Lista de seguidores para mostrar
  const followers = [
    { id: 1, username: "Refri" },
    { id: 2, username: "TheLargest_Username_" },
    { id: 3, username: "Franco" }
  ];

  return (
    <div className="space-y-4 p-2 sm:p-0 mt-20 sm:mt-24 lg:mt-0">
      {/* Contenedor principal del post */}
      <div className="w-full rounded-lg p-4 sm:p-6" style={{backgroundColor: '#202127', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'}}>
        {/*Header del Post*/}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 space-y-3 sm:space-y-0">
          {/* Seccion de la izquierda */}
          <div className="flex items-center space-x-3">
            {/* Avatar del usuario */}
            <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="10" r="3"/>
                    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
                </svg>
            </button>

            {/* Nombre de usuario */}
            <div>
              <p className="text-white font-medium text-base sm:text-lg">Username</p>
            </div>
          </div>

          {/* Seccion de la derecha */}
          <div className="flex items-center space-x-2">
            {/* Botón de editar */}
            <button
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg transition-all duration-300 hover:opacity-80"
              style={{
                backgroundColor: '#32363F',
                boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'
              }}
              aria-label="Editar perfil"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-white sm:w-5 sm:h-5"
              >
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                <path d="m15 5 4 4"/>
              </svg>
            </button>

            {/* Botón de configuración*/}
            <button
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg transition-all duration-300 hover:opacity-80"
              style={{
                backgroundColor: '#32363F',
                boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'
              }}
              aria-label="Configuración"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-white sm:w-5 sm:h-5"
              >
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Contenido del post */}
        <div className="mb-4 sm:mb-6">
          <p className="text-white text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales maximus faucibus. Sed vitae non.
          </p>
        </div>

        {/* Información de seguidores */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-8">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="text-white font-medium text-sm sm:text-base">137</span>
            <span className="text-sm sm:text-base" style={{color: '#DDDDDD'}}>Seguidores</span>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="text-white font-medium text-sm sm:text-base">547</span>
            <span className="text-sm sm:text-base" style={{color: '#D868A0'}}>Seguidos</span>
          </div>
        </div>
      </div>

      {/* Tarjetas de seguidores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {followers.map((follower) => (
          <div 
            key={follower.id}
            className="rounded-lg px-3 py-4 flex items-center transition-all duration-200 hover:brightness-110"
            style={{ 
              backgroundColor: '#202127',
              boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'
            }}
          >
            {/* Avatar y nombre*/}
            <div className="flex items-center gap-3 min-w-0 w-full">
              <div className="flex items-center justify-center flex-shrink-0">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                >
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="10" r="3"/>
                  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-white truncate">
                {follower.username}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCard;