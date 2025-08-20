import React from 'react';
import PostCard from './Postcard';
import RightSidebarCard from './Panel2'; 

const Panel1 = () => {
  return (
    <div className="flex justify-center pt-[100px]">
      <div className="w-full max-w-[1400px] flex justify-start items-start gap-8 px-4">
        {/* Panel izquierdo */}
        <div className="w-80 flex-shrink-0 rounded-lg bg-secondary p-6" style={{boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'}}>
            {/* Texto superior */}
            <div className="text-center mb-6">
              <p className="text-white text-lg leading-relaxed">
                Para hacer publicaciones<br />
                primero debes
            </p>
          </div>

          {/* Botón Iniciar Sesión */}
          <div className="mb-6 flex justify-center">
            <a 
              href="/login" 
              className="flex items-center justify-center text-white default-font transition-all duration-200 no-underline border-2 border-pink bg-transparent hover:bg-pink"
              style={{
                width: '176px',
                height: '40px',
                borderRadius: '20px'
              }}
            >
              Iniciar Sesión
            </a>
          </div>

          {/* Texto intermedio */}
          <div className="text-center mb-6">
            <p className="text-white text-lg">
              Si aún no tienes una<br />
              cuenta puedes
            </p>
          </div>

          {/* Botón Registrarse*/}
          <div className="flex justify-center">
            <a 
              href="/register" 
              className="flex items-center justify-center text-white default-font transition-all duration-200 no-underline border-2 border-blue bg-transparent hover:bg-blue"
              style={{
                width: '176px',
                height: '40px',
                borderRadius: '20px'
              }}
            >
              Registrarse
            </a>
          </div>
        </div>

        {/* PostCard al centro */}
        <div className="w-[660px]">
          <PostCard />
        </div>

        {/* Panel derecho (RightSidebarCard) */}
        <div className="flex-shrink-0">
          <RightSidebarCard />
        </div>
      </div>
    </div>
  );
};

export default Panel1;