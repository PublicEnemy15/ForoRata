import React from 'react';

const PostCard = () => {
  return (
    <div className="bg-secondary rounded-lg p-6" style={{boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'}}>
      {/* Header del post */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">

        <button className="w-10 h-10 flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="10" r="3"/>
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
            </svg>
        </button>

          <div className="flex items-baseline space-x-2">
            <p className="text-white font-medium">Username</p>
            <p className="text-gray-400 text-sm">· 3min</p>
          </div>
        </div>

        <button className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-light text-gray-400 hover:text-white transition-colors cursor-pointer" style={{boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'}}>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-6 h-6"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <line x1="19" x2="19" y1="8" y2="14"/>
            <line x1="22" x2="16" y1="11" y2="11"/>
        </svg>
        </button>

      </div>

      {/* Contenido del post */}
      <div className="mb-4">
        <p className="text-gray-200 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor tempor neque eu pretium. Nullam nisl purus, pretium at diam eu, cursus hendrerit dolor. Curabitur sagittis, libero sed volutpat.
        </p>
      </div>

      {/* Botones de interacción */}
    <div className="flex items-center space-x-6">
        <button className="flex items-center space-x-2 text-gray-400 hover:text-pink transition-colors group">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-sm group-hover:text-white transition-all duration-300">100</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-400 hover:text-blue transition-colors group">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-sm group-hover:text-white transition-all duration-300">45</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
            </svg>
            <span className="text-sm group-hover:text-white transition-all duration-300">Zelda</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;