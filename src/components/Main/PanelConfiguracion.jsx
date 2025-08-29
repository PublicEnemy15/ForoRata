import React, { useState, useEffect } from "react";

const IconSistema = ({ color = "currentColor" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v2" />
    <path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715" />
    <path d="M16 12a4 4 0 0 0-4-4" />
    <path d="m19 5-1.256 1.256" />
    <path d="M20 12h2" />
  </svg>
);

const IconClaro = ({ color = "currentColor" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const IconOscuro = ({ color = "currentColor" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
  </svg>
);

const SaveIcon = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </svg>
);

const PanelConfiguracion = () => {
  // Cargar datos del localStorage al inicializar
  const [biografia, setBiografia] = useState(() => {
    return localStorage.getItem('biografia') || "¡increí!";
  });
  const [nuevaContrasena, setNuevaContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [temaSeleccionado, setTemaSeleccionado] = useState(() => {
    return localStorage.getItem('tema') || "Oscuro";
  });

  const iconosTemas = {
    Claro: <IconClaro />,
    Oscuro: <IconOscuro />,
  };

  const temas = {
    Claro: {
      "--color-background": "#fff",
      "--color-CardBackground": "#fff",
      "--color-white": "#000",
      "--color-unselect": "#f0f0f0",
      "--color-select": "#e0e0e0",
      "--color-SecondaryText-PreHover": "#AAAAAA",
    },
    Oscuro: {
      "--color-background": "#1B1B1F",
      "--color-CardBackground": "#202127",
      "--color-white": "#fff",
      "--color-unselect": "#32363F",
      "--color-select": "#545a68",
      "--color-SecondaryText-PreHover": "#AAAAAA",
    },
  
  };

  useEffect(() => {
    const root = document.documentElement;
    const variables = temas[temaSeleccionado];
    Object.keys(variables).forEach((key) => {
      root.style.setProperty(key, variables[key]);
    });
    // guardar tema en localStorage
    localStorage.setItem('tema', temaSeleccionado);
  }, [temaSeleccionado]);

  // para guardar biografía
  const guardarBiografia = () => {
    localStorage.setItem('biografia', biografia);
    // Aquí podrías agregar una notificación de éxito
  };

  // para cambiar contraseña
  const cambiarContrasena = () => {
    if (nuevaContrasena !== confirmarContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }
    if (nuevaContrasena.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    // "guardariamor la contraseña "
    localStorage.setItem('contrasena', nuevaContrasena); //  demo
    setNuevaContrasena('');
    setConfirmarContrasena('');
    alert('Contraseña actualizada correctamente');
  };

  const obtenerEstiloBoton = (nombreTema) => {
    const esActivo = temaSeleccionado === nombreTema;
    
    let colorTexto = "#000"; 
    
    if (esActivo) {
      colorTexto = nombreTema === "Claro" ? "#000" : "#fff";
    } else {
      // si no está activo, usar blanco en tema oscuro
      if (temaSeleccionado === "Oscuro") {
        colorTexto = "#fff";
      } else {
        colorTexto = "#000";
      }
    }
    return {
      backgroundColor: esActivo
        ? nombreTema === "Claro"
          ? "#E28EB8" // accent3
          : "#D868A0" // accent2
        : "var(--color-unselect)",
      color: colorTexto,
    };
  };
  const textColor = "var(--color-white)";
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: "653px",
          top: "91px",
          width: "614px",
          height: "486px",
          backgroundColor: "var(--color-CardBackground)",
          borderRadius: "12px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.4), 0 3px 6px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2)",
          fontFamily: "var(--default-font)",
        }}
      />
      <h3
        style={{
          position: "fixed",
          left: "693px",
          top: "121px",
          color: textColor,
          fontWeight: 600,
          fontSize: "16px",
        }}
      >
        Editar Biografía
      </h3>
      <div
        onClick={guardarBiografia}
        style={{
          position: "fixed",
          left: "1187px",
          top: "111px",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: temaSeleccionado === "Claro" ? "#fff" : "#32363F",
          border: "1px solid var(--color-select)",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 2px 4px rgba(0,0,0,0.4), 0 3px 6px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <SaveIcon color={textColor} />
      </div>
      <textarea
        value={biografia}
        onChange={(e) => setBiografia(e.target.value)}
        maxLength={100}
        placeholder="Escribe tu biografía..."
        style={{
          position: "fixed",
          left: "693px",
          top: "161px",
          width: "534px",
          height: "60px",
          backgroundColor: "var(--color-unselect)",
          color: textColor,
          border: "1px solid var(--color-unselect)",
          borderRadius: "8px",
          padding: "8px",
          fontFamily: "var(--default-font)",
          resize: "none",
          outline: "none",
          boxShadow: "0 2px 4px rgba(0,0,0,0.4), 0 3px 6px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2)",
        }}
      />
      <span
        style={{
          position: "fixed",
          left: "1182px",
          top: "232px",
          fontSize: "12px",
          color: textColor,
        }}
      >
        {biografia.length}/100
      </span>
      <h3
        style={{
          position: "fixed",
          left: "693px",
          top: "296px",
          color: textColor,
          fontWeight: 600,
          fontSize: "16px",
        }}
      >
        Cambiar Contraseña
      </h3>
      <div
        onClick={cambiarContrasena}
        style={{
          position: "fixed",
          left: "1189px",
          top: "286px",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: temaSeleccionado === "Claro" ? "#fff" : "#32363F",
          border: "1px solid var(--color-select)",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 2px 4px rgba(0,0,0,0.4), 0 3px 6px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <SaveIcon color={textColor} />
      </div>
      <input
        type="password"
        value={nuevaContrasena}
        onChange={(e) => setNuevaContrasena(e.target.value)}
        placeholder="Nueva Contraseña"
        style={{
          position: "fixed",
          left: "693px",
          top: "336px",
          width: "340px",
          height: "40px",
          backgroundColor: "var(--color-unselect)",
          color: "var(--color-white)",
          border: "1px solid var(--color-unselect)",
          borderRadius: "6px",
          padding: "8px",
        }}
        className="input-placeholder"
        
      />
      <input
        type="password"
        value={confirmarContrasena}
        onChange={(e) => setConfirmarContrasena(e.target.value)}
        placeholder="Confirmar Contraseña"
        style={{
          position: "fixed",
          left: "693px",
          top: "396px",
          width: "340px",
          height: "40px",
          backgroundColor: "var(--color-unselect)",
          color: "var(--color-white)",
          border: "1px solid var(--color-unselect)",
          borderRadius: "6px",
          padding: "8px",
        }}
        className="input-placeholder"
        
      />
      <h3
        style={{
          position: "fixed",
          left: "693px",
          top: "476px",
          fontSize: "16px",
          fontWeight: 600,
          color: textColor,
        }}
      >
        Cambiar Tema
      </h3>
      <button
        data-tema="Claro"
        onClick={() => setTemaSeleccionado("Claro")}
        style={{
          position: "fixed",
          left: "857px",
          top: "517px",
          minWidth: "7rem",
          height: "2.5rem",
          borderRadius: "11.5px",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          border: "none",
          boxShadow: "0 2px 4px rgba(0,0,0,0.4), 0 3px 6px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2)",
          cursor: "pointer",
          ...obtenerEstiloBoton("Claro"),
        }}
      >
        {iconosTemas["Claro"]}
        <span>Claro</span>
      </button>
      <button
        data-tema="Oscuro"
        onClick={() => setTemaSeleccionado("Oscuro")}
        style={{
          position: "fixed",
          left: "1001px",
          top: "516px",
          minWidth: "7rem",
          height: "2.5rem",
          borderRadius: "11.5px",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          border: "none",
          boxShadow: "0 2px 4px rgba(0,0,0,0.4)",
          cursor: "pointer",
          ...obtenerEstiloBoton("Oscuro"),
        }}
      >
        {iconosTemas["Oscuro"]}
        <span>Oscuro</span>
      </button>
    </>
  );
};

export default PanelConfiguracion;