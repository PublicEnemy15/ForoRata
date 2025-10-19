import React from 'react';

// Componente base para iconos
const IconBase = ({ children, size = 20, className = "", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    {children}
  </svg>
);

// Icono de Usuario/Avatar
export const UserIcon = ({ size = 40, className = "" }) => (
  <IconBase size={size} className={className} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="10" r="3"/>
    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
  </IconBase>
);

// Icono de Home
export const HomeIcon = ({ size = 20, className = "" }) => (
  <IconBase size={size} className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  </IconBase>
);

// Icono de Seguidores/Usuarios
export const FollowersIcon = ({ size = 20, className = "" }) => (
  <IconBase size={size} className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
    <path d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"/>
  </IconBase>
);

// Icono de Perfil
export const ProfileIcon = ({ size = 20, className = "" }) => (
  <IconBase size={size} className={className} fill="currentColor">
    <path d="M12 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8zM6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8zm2 10a3 3 0 0 0-3 3a1 1 0 1 1-2 0a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5a1 1 0 1 1-2 0a3 3 0 0 0-3-3H8z"/>
  </IconBase>
);

// Icono de Configuración
export const SettingsIcon = ({ size = 20, className = "" }) => (
  <IconBase size={size} className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
    <path d="M7.05 6.462a2 2 0 0 0 2.63-1.519l.32-1.72a9 9 0 0 1 3.998 0l.322 1.72a2 2 0 0 0 2.63 1.519l1.649-.58a9 9 0 0 1 2.001 3.46l-1.33 1.14a2 2 0 0 0 0 3.037l1.33 1.139a9 9 0 0 1-2.001 3.46l-1.65-.58a2 2 0 0 0-2.63 1.519L14 20.777a9 9 0 0 1-3.998 0l-.322-1.72a2 2 0 0 0-2.63-1.519l-1.649.58a9 9 0 0 1-2.001-3.46l1.33-1.14a2 2 0 0 0 0-3.036L3.4 9.342a9 9 0 0 1 2-3.46zM12 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6" clipRule="evenodd"/>
  </IconBase>
);

// Icono de Salir/Logout
export const LogoutIcon = ({ size = 20, className = "" }) => (
  <IconBase size={size} className={className} fill="currentColor">
    <path fillRule="evenodd" d="M11 20a1 1 0 0 0-1-1H5V5h5a1 1 0 1 0 0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5a1 1 0 0 0 1-1z" clipRule="evenodd"/>
    <path d="M21.714 12.7a.996.996 0 0 0 .286-.697v-.006a.997.997 0 0 0-.293-.704l-4-4a1 1 0 1 0-1.414 1.414L18.586 11H9a1 1 0 1 0 0 2h9.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4l.007-.007z"/>
  </IconBase>
);

// Icono de Post/Documento
export const PostIcon = ({ size = 20, className = "" }) => (
  <IconBase size={size} className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
    <path d="M4 6h16M4 12h10M4 18h14"/>
  </IconBase>
);

// Icono de Editar
export const EditIcon = ({ size = 16, className = "" }) => (
  <IconBase size={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
    <path d="m15 5 4 4"/>
  </IconBase>
);

// Icono de Check (Siguiendo)
export const CheckIcon = ({ size = 16, className = "" }) => (
  <IconBase size={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 13l4 4L19 7" />
  </IconBase>
);

// Icono de Agregar Seguidor
export const AddFollowerIcon = ({ size = 16, className = "" }) => (
  <IconBase size={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="8.5" cy="7" r="4"/>
    <path d="m17 11l2 2l4-4"/>
  </IconBase>
);

// Icono de Rata
export const RatIcon = ({ size = 32, className = "" }) => (
  <IconBase size={size} className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
    <path d="M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4"/>
    <path d="M16.8 3.9c.3-.3.6-.5 1-.7c1.5-.6 3.3.1 3.9 1.6c.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1c-.2.8-.9 1.2-1.7 1.1c0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"/>
    <path d="M13.2 18a3 3 0 0 0-2.2-5m2 9H4a2 2 0 0 1 0-4h12m0-9h.01"/>
  </IconBase>
);

export default {
  UserIcon,
  HomeIcon,
  FollowersIcon,
  ProfileIcon,
  SettingsIcon,
  LogoutIcon,
  PostIcon,
  EditIcon,
  CheckIcon,
  AddFollowerIcon,
  RatIcon
};