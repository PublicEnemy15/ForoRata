import React from 'react';
import PostCard from './Postcard';
import FollowCard from './FollowCard';

const UserCard = () => {
  const baseButtonClasses = "flex items-center justify-center font-bold no-underline transition-colors duration-100 border-2 h-10 w-44 text-lg rounded-[20px] focus:outline-none focus:ring-2";

  return (
    <div className="pt-[100px]">
      <div className="flex items-start gap-[30px]">
        {/* Panel principal */}
        <div
          className="w-[360px] flex-shrink-0 bg-CardBackground flex flex-col items-center"
          style={{
            borderRadius: '10px',
            boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)',
            padding: '30px 24px',
          }}
        >
          {/* Seccion 1: Texto superior y Boton Iniciar Sesion */}
          <div className="flex flex-col items-center text-center space-y-[30px]">
            <p className="text-white text-lg leading-relaxed">
              Para hacer publicaciones<br />
              primero debes
            </p>
            <a
              href="/login"
              className={`${baseButtonClasses} border-accent2 bg-background text-white hover:bg-accent2 focus:ring-accent2-300`}
              style={{
                boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)',
              }}
            >
              Iniciar Sesión
            </a>
          </div>

          <div className="h-[60px]"></div>

          {/* Seccion 2: Texto intermedio y Boton Registrarse */}
          <div className="flex flex-col items-center text-center space-y-[30px]">
            <p className="text-white text-lg">
              Si aún no tienes una<br />
              cuenta puedes
            </p>
            <a
              href="/login"
              className={`${baseButtonClasses} border-accent1 bg-background text-white hover:bg-accent1 focus:ring-accent1-300`}
              style={{
                boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)',
              }}
            >
              Registrarse
            </a>
          </div>
        </div>

        {/* PostCard */}
        <div className="w-[614px]">
          <PostCard />
        </div>

        {/* FollowCard */}
        <div className="w-[360px]">
          <FollowCard />
        </div>

      </div>
    </div>
  );
};

export default UserCard;