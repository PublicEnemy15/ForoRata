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
  const [biografia, setBiografia] = useState("¡increí!");
  const [nuevaContrasena, setNuevaContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [temaSeleccionado, setTemaSeleccionado] = useState("Oscuro");

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
  }, [temaSeleccionado]);

  const guardarBiografia = () => {
    alert('Biografía guardada correctamente');
  };

  const cambiarContrasena = () => {
    if (nuevaContrasena !== confirmarContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }
    if (nuevaContrasena.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }
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
      if (temaSeleccionado === "Oscuro") {
        colorTexto = "#fff";
      } else {
        colorTexto = "#000";
      }
    }
    return {
      backgroundColor: esActivo
        ? nombreTema === "Claro"
          ? "#E28EB8"
          : "#D868A0"
        : "var(--color-unselect)",
      color: colorTexto,
    };
  };

  const textColor = "var(--color-white)";

  return (
    <>
      <style>
        {`
          .panel-container {
            position: fixed;
            left: 50%;
            top: calc(60px + 40px);
            transform: translateX(-50%);
            width: min(90vw, 614px);
            height: min(85vh, 486px);
            background-color: var(--color-CardBackground);
            border-radius: 12px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.4), 0 3px 6px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2);
            font-family: var(--default-font);
          }

          .biografia-title {
            position: absolute;
            left: 6.5%;
            top: 6.2%;
            color: var(--color-white);
            font-weight: 600;
            font-size: clamp(14px, 2.6vw, 16px);
          }

          .save-biografia-btn {
            position: absolute;
            right: 3.3%;
            top: 4.1%;
            width: clamp(35px, 6.5vw, 40px);
            height: clamp(35px, 6.5vw, 40px);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-select);
            border-radius: 8px;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0,0,0,0.4), 0 3px 6px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2);
          }

          .biografia-textarea {
            position: absolute;
            left: 6.5%;
            top: 14.4%;
            width: 87%;
            height: 12.3%;
            background-color: var(--color-unselect);
            color: var(--color-white);
            border: 1px solid var(--color-unselect);
            border-radius: 8px;
            padding: 8px;
            font-family: var(--default-font);
            resize: none;
            outline: none;
            box-shadow: 0 2px 4px rgba(0,0,0,0.4), 0 3px 6px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2);
            font-size: clamp(12px, 2.3vw, 14px);
          }

          .char-count {
            position: absolute;
            right: 4.2%;
            top: 29.2%;
            font-size: clamp(10px, 2vw, 12px);
            color: var(--color-white);
          }

          .password-title {
            position: absolute;
            left: 6.5%;
            top: 42.8%;
            color: var(--color-white);
            font-weight: 600;
            font-size: clamp(14px, 2.6vw, 16px);
          }

          .save-password-btn {
            position: absolute;
            right: 3.1%;
            top: 40.5%;
            width: clamp(35px, 6.5vw, 40px);
            height: clamp(35px, 6.5vw, 40px);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-select);
            border-radius: 8px;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0,0,0,0.4), 0 3px 6px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2);
          }

          .password-input {
            position: absolute;
            left: 6.5%;
            width: 55.4%;
            height: 8.2%;
            background-color: var(--color-unselect);
            color: var(--color-white);
            border: 1px solid var(--color-unselect);
            border-radius: 6px;
            padding: 8px;
            font-size: clamp(12px, 2.3vw, 14px);
            outline: none;
          }

          .new-password {
            top: 53.1%;
          }

          .confirm-password {
            top: 65.4%;
          }

          .theme-title {
            position: absolute;
            left: 6.5%;
            top: 80.2%;
            font-size: clamp(14px, 2.6vw, 16px);
            font-weight: 600;
            color: var(--color-white);
          }

          .theme-button {
            position: absolute;
            top: 89.3%;
            min-width: clamp(90px, 18vw, 7rem);
            height: clamp(35px, 6.8vw, 2.5rem);
            border-radius: 11.5px;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            border: none;
            box-shadow: 0 2px 4px rgba(0,0,0,0.4), 0 3px 6px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2);
            cursor: pointer;
            font-size: clamp(12px, 2.2vw, 14px);
          }

          .theme-claro {
            left: 33.2%;
          }

          .theme-oscuro {
            right: 16.8%;
          }

          .input-placeholder::placeholder {
            color: var(--color-SecondaryText-PreHover);
          }

          /* Media Queries responsivas consistentes */
          @media (max-width: 480px) {
            .panel-container {
              width: 95vw;
              max-width: none;
              height: auto;
              min-height: 400px;
            }
            
            .biografia-title,
            .password-title,
            .theme-title {
              font-size: 16px;
            }
            
            .biografia-textarea {
              height: 80px;
              font-size: 14px;
            }
            
            .password-input {
              width: 75%;
              height: 40px;
              font-size: 14px;
            }
            
            .theme-button {
              min-width: 120px;
              height: 40px;
              font-size: 14px;
            }
            
            .theme-claro {
              left: 8%;
            }
            
            .theme-oscuro {
              right: 8%;
            }

            .save-biografia-btn,
            .save-password-btn {
              width: 40px;
              height: 40px;
            }
          }

          @media (min-width: 481px) and (max-width: 768px) {
            .panel-container {
              width: 90vw;
              max-width: 500px;
              height: auto;
              min-height: 450px;
            }
            
            .biografia-textarea {
              height: 70px;
            }
            
            .password-input {
              width: 70%;
            }
            
            .theme-button {
              min-width: 25vw;
            }
          }

          @media (min-width: 769px) and (max-width: 1024px) {
            .panel-container {
              width: 80vw;
              max-width: 600px;
              height: 480px;
            }
          }

          @media (min-width: 1025px) {
            .panel-container {
              width: 614px;
              height: 486px;
            }
          }
        `}
      </style>

      <div className="panel-container">
        <h3 className="biografia-title">
          Editar Biografía
        </h3>
        
        <div
          onClick={guardarBiografia}
          className="save-biografia-btn"
          style={{
            backgroundColor: temaSeleccionado === "Claro" ? "#fff" : "#32363F",
          }}
        >
          <SaveIcon color={textColor} />
        </div>
        
        <textarea
          value={biografia}
          onChange={(e) => setBiografia(e.target.value)}
          maxLength={100}
          placeholder="Escribe tu biografía..."
          className="biografia-textarea input-placeholder"
        />
        
        <span className="char-count">
          {biografia.length}/100
        </span>
        
        <h3 className="password-title">
          Cambiar Contraseña
        </h3>
        
        <div
          onClick={cambiarContrasena}
          className="save-password-btn"
          style={{
            backgroundColor: temaSeleccionado === "Claro" ? "#fff" : "#32363F",
          }}
        >
          <SaveIcon color={textColor} />
        </div>
        
        <input
          type="password"
          value={nuevaContrasena}
          onChange={(e) => setNuevaContrasena(e.target.value)}
          placeholder="Nueva Contraseña"
          className="password-input new-password input-placeholder"
        />
        
        <input
          type="password"
          value={confirmarContrasena}
          onChange={(e) => setConfirmarContrasena(e.target.value)}
          placeholder="Confirmar Contraseña"
          className="password-input confirm-password input-placeholder"
        />
        
        <h3 className="theme-title">
          Cambiar Tema
        </h3>
        
        <button
          data-tema="Claro"
          onClick={() => setTemaSeleccionado("Claro")}
          className="theme-button theme-claro"
          style={obtenerEstiloBoton("Claro")}
        >
          {iconosTemas["Claro"]}
          <span>Claro</span>
        </button>
        
        <button
          data-tema="Oscuro"
          onClick={() => setTemaSeleccionado("Oscuro")}
          className="theme-button theme-oscuro"
          style={obtenerEstiloBoton("Oscuro")}
        >
          {iconosTemas["Oscuro"]}
          <span>Oscuro</span>
        </button>
      </div>
    </>
  );
};

export default PanelConfiguracion;