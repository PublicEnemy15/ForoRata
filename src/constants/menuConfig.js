export const MENU_ITEMS = [
  {
    id: 'inicio',
    label: 'Inicio',
    section: 'inicio'
  },
  {
    id: 'seguidos',
    label: 'Seguidos',
    section: 'seguidos'
  },
  {
    id: 'perfil',
    label: 'Perfil',
    section: 'perfil'
  },
  {
    id: 'configurar',
    label: 'Configurar',
    section: 'configurar'
  },
  {
    id: 'salir',
    label: 'Salir',
    section: 'salir'
  }
];

// Datos de usuario por defecto
export const DEFAULT_USER_DATA = {
  username: "Username",
  followers: 137,
  following: 547
};

// Mock de últimos seguidores
export const MOCK_FOLLOWERS = [
  { 
    id: 1, 
    username: "TheLargest_Username_", 
    hasNotification: true, 
    isFollowing: false 
  },
  { 
    id: 2, 
    username: "Luis", 
    hasNotification: true, 
    isFollowing: false 
  },
  { 
    id: 3, 
    username: "Refri", 
    hasNotification: false, 
    isFollowing: false 
  }
];

// Mock de seguidos (para PostCard)
export const MOCK_FOLLOWING = [
  { id: 1, username: "Refri" },
  { id: 2, username: "TheLargest_Username_" },
  { id: 3, username: "Franco" }
];