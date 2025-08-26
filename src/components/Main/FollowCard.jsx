import React from 'react';

const FollowCard = () => {
  return (
    <div className="w-[360px] bg-CardBackground rounded-lg p-6" style={{boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'}}>
      {/* Titulo */}
      <div className="text-center mb-6">
        <p className="text-white text-lg">
          Después de iniciar sesión, acá podrás ver
          los perfiles que sigues
        </p>
      </div>
    </div>
  );
};

export default FollowCard;