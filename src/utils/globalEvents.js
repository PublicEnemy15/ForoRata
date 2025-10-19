// Sistema centralizado de eventos globales para sincronización del menú

// Inicializar variable global del menú
if (typeof window !== 'undefined' && !window.globalMenuSection) {
  window.globalMenuSection = 'inicio';
}

/**
 * Cambiar la sección activa del menú globalmente
 * @param {string} section - ID de la sección ('inicio', 'perfil', etc.)
 */
export const changeMenuSection = (section) => {
  if (typeof window === 'undefined') return;
  
  console.log('📍 Cambiando sección global a:', section);
  
  // Actualizar variable global
  window.globalMenuSection = section;
  
  // Emitir evento para todos los componentes que escuchan
  window.dispatchEvent(new CustomEvent('global-menu-change', {
    detail: { section }
  }));
  
  // Mantener compatibilidad con el sistema anterior
  window.dispatchEvent(new CustomEvent('main-content-change', {
    detail: { section }
  }));
};

/**
 * Obtener la sección activa actual
 * @returns {string} Sección activa
 */
export const getCurrentSection = () => {
  if (typeof window === 'undefined') return 'inicio';
  return window.globalMenuSection || 'inicio';
};

/**
 * Cerrar todos los paneles móviles (menú y seguidores)
 */
export const closeMobilePanels = () => {
  if (typeof window === 'undefined') return;
  
  const menuPanel = document.getElementById('menu-options-panel');
  const followersModal = document.getElementById('followers-modal');
  const overlay = document.getElementById('panels-overlay');
  const menuBtn = document.getElementById('menu-options-btn');
  const followersBtn = document.getElementById('followers-btn');
  
  // Cerrar paneles
  if (menuPanel) menuPanel.classList.add('-translate-x-full');
  if (followersModal) followersModal.classList.add('translate-x-full');
  if (overlay) overlay.classList.add('hidden');
  
  // Resetear colores de botones
  if (menuBtn) menuBtn.style.setProperty('background-color', 'var(--color-unselect)');
  if (followersBtn) followersBtn.style.setProperty('background-color', 'var(--color-unselect)');
};

/**
 * Suscribirse a cambios de menú
 * @param {Function} callback - Función que recibe la nueva sección
 * @returns {Function} Función de limpieza para remover el listener
 */
export const subscribeToMenuChanges = (callback) => {
  if (typeof window === 'undefined') return () => {};
  
  const handleChange = (event) => {
    callback(event.detail.section);
  };
  
  window.addEventListener('global-menu-change', handleChange);
  
  // Retornar función de limpieza
  return () => {
    window.removeEventListener('global-menu-change', handleChange);
  };
};

export default {
  changeMenuSection,
  getCurrentSection,
  closeMobilePanels,
  subscribeToMenuChanges
};