import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import Button from "../Common/Button";

function Card() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // 🔹 Limpiar mensajes después de 5 segundos
  useEffect(() => {
    if (error || successMessage) {
      const timer = setTimeout(() => {
        setError(null);
        setSuccessMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, successMessage]);

  // 🔹 Verificar mensajes de autenticación al cargar
  useEffect(() => {
    const authMessage = localStorage.getItem('authMessage');
    if (authMessage) {
      const [type, message] = authMessage.split('|');
      if (type === 'success') {
        setSuccessMessage(message);
      } else if (type === 'error') {
        setError(message);
      }
      localStorage.removeItem('authMessage');
    }
  }, []);

  // 🔹 Iniciar sesión con Google
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError(null);
      setSuccessMessage(null);

      // Guardar que estamos en modo login
      localStorage.setItem('authMode', 'login');

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.origin + '/auth-callback'
        }
      });

      if (error) {
        throw error;
      }

    } catch (error) {
      console.error("Error en login con Google:", error);
      setError("Error al conectar con Google. Inténtalo de nuevo.");
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen ">
      <div className="bg-[#202127] rounded-[20px] shadow-5xl w-[460px] h-[524px] mx-[730px] my-[100px] text-center shadow-[0_6px_10px_rgba(0,0,0,0.5)]">

        <h2 className="text-white font-bold whitespace-nowrap text-[32px] mx-[105px] my-[60px]">Inicia Sesión</h2>

        {/* Inputs */}
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-white font-bold text-[18px] w-[340px] h-[40px] p-[20px] mb-[30px] rounded-[10px] bg-[#32363F] focus:placeholder-transparent"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-white font-bold text-[18px] w-[340px] h-[40px] p-[20px] mb-[30px] rounded-[10px] bg-[#32363F] focus:placeholder-transparent"
        />

        {/* Botón iniciar sesión manual */}
        <Button
          disabled={loading}
          onClick={() => {
            console.log("Botón de login manual presionado (sin acción).");
          }}
          className="w-[176px] h-[40px] mx-[142px] mb-[20px] text-[18px] font-bold bg-gradient-to-r from-[#1B1B1F] to-[#1B1B1F] hover:from-[#D868A0] hover:to-[#D868A0] rounded transition shadow-[0_6px_10px_rgba(0,0,0,0.4)] disabled:opacity-50"
        >
          {loading ? "Cargando..." : "Iniciar Sesión"}
        </Button>

        {/* Botón Google */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-[176px] h-[40px] mx-[142px] mb-[40px] text-[18px] flex items-center justify-center bg-[#1B1B1F] hover:bg-neutral-800 text-white rounded-[20px] shadow-[0_6px_10px_rgba(0,0,0,0.6)] disabled:opacity-50"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          {loading ? "Procesando..." : "Google"}
        </button>

        {/* Enlace registro */}
        <p className="text-gray-400 text-xs mt-2">
          <a href="/register" className="text-blue-400 text-[15px]"><u>Regístrate</u></a> <a className="text-white text-[15px]">si aún no tienes una cuenta</a>
        </p>

        {/* Mensajes de éxito */}
        {successMessage && (
          <div className="bg-green-600 text-white text-sm mt-4 p-3 rounded-lg mx-4">
            {successMessage}
          </div>
        )}

        {/* Errores */}
        {error && (
          <div className="bg-red-600 text-white text-sm mt-4 p-3 rounded-lg mx-4">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default function LoginCard() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card />
    </div>
  );
}