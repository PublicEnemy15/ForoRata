import React from 'react';

const RightSidebarCard = () => {
  return (
    <div className="w-80 bg-secondary rounded-lg p-6" style={{boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)'}}>
      {/* Título */}
      <div className="text-center mb-6">
        <p className="text-white text-lg">
          Después de iniciar sesión, acá podrás ver
          los perfiles que sigues
        </p>
      </div>
    </div>
  );
};

export default RightSidebarCard;