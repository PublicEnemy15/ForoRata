import React, { useState } from 'react';

const FollowCard = () => {
  const [followers, setFollowers] = useState([
    { id: 1, username: "TheLargest_Username_", hasNotification: true, isFollowing: false },
    { id: 2, username: "Luis", hasNotification: true, isFollowing: false },
    { id: 3, username: "Refri", hasNotification: false, isFollowing: false }
  ]);

  const toggleFollow = (id) => {
    setFollowers(followers.map(follower => 
      follower.id === id 
        ? { ...follower, isFollowing: !follower.isFollowing }
        : follower
    ));
  };

  return (
    <div className="w-full max-w-md space-y-4">
      {/* Header */}
      <div 
        className="rounded-lg px-4 py-4 flex items-center justify-center gap-3"
        style={{ 
          backgroundColor: 'var(--color-unselect)', 
          boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)' 
        }}
      >
        {/* Ratita en SVG */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24"
          className="sm:w-10 sm:h-10"
          style={{ color: 'var(--color-white)' }}
        >
          <g 
            fill="none" 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2"
          >
            <path d="M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4"/>
            <path d="M16.8 3.9c.3-.3.6-.5 1-.7c1.5-.6 3.3.1 3.9 1.6c.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1c-.2.8-.9 1.2-1.7 1.1c0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"/>
            <path d="M13.2 18a3 3 0 0 0-2.2-5m2 9H4a2 2 0 0 1 0-4h12m0-9h.01"/>
          </g>
        </svg>

        <span className="text-sm sm:text-base font-medium" style={{ color: 'var(--color-white)' }}>
          Tus Últimos Seguidores
        </span>
      </div>

      {/* Lista de seguidores */}
      <div className="space-y-3">
        {followers.map((follower) => (
          <div 
            key={follower.id}
            className="rounded-lg px-3 sm:px-5 py-3 flex items-center justify-between transition-all duration-200 hover:brightness-110"
            style={{ 
              backgroundColor: 'var(--color-CardBackground)',
              boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'
            }}
          >
            {/* Avatar y nombre */}
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-10 h-10 sm:w-12 sm:h-12"
                  style={{ color: 'var(--color-white)' }}
                >
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="10" r="3"/>
                  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
                </svg>
              </div>
              <span className="text-sm font-medium truncate" style={{ color: 'var(--color-white)' }}>
                {follower.username}
              </span>
            </div>

            {/* Botón seguir*/}
            <button
              onClick={() => toggleFollow(follower.id)}
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg transition-all duration-300 hover:opacity-80"
              style={{
                backgroundColor: follower.isFollowing ? '#4CAF50' : 'var(--color-unselect)',
                boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'
              }}
              aria-label={follower.isFollowing ? "Dejar de seguir" : "Seguir"}
            >
              {follower.isFollowing ? (
                // Icono de check si ya sigue
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
                  className="sm:w-5 sm:h-5"
                  style={{ color: 'var(--color-white)' }}
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              ) : (
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
                  className="sm:w-5 sm:h-5"
                  style={{ color: 'var(--color-white)' }}
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="8.5" cy="7" r="4"/>
                  <path d="m17 11l2 2l4-4"/>
                </svg>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowCard;