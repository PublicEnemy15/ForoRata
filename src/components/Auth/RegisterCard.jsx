import React from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

function Card() {
  const { loginWithRedirect, isLoading, error } = useAuth0();

  return (
    <div className="flex h-screen ">
      <div className="bg-[#202127] rounded-[20px] shadow-5xl w-[460px] h-[594px] mx-[730px] my-[80px] text-center shadow-[0_6px_10px_rgba(0,0,0,0.5)]">

        <h2 className="text-white font-bold whitespace-nowrap text-[32px] mx-[105px] my-[60px]">Regístrate</h2>

        {/* Inputs */}
        <input
          type="text"
          placeholder="Nombre de usuario"
          className="text-white font-bold text-[18px] w-[340px] h-[40px] p-[20px] mb-[30px] rounded-[10px] bg-[#32363F] focus:placeholder-transparent"
        />
        <input
          type="email"
          placeholder="Correo"
          className="text-white font-bold text-[18px] w-[340px] h-[40px] p-[20px] mb-[30px] rounded-[10px] bg-[#32363F] focus:placeholder-transparent"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="text-white font-bold text-[18px] w-[340px] h-[40px] p-[20px] mb-[30px] rounded-[10px] bg-[#32363F] focus:placeholder-transparent"
        />

        {/* Botón registro */}
        <button
          disabled={isLoading}
          //onClick={() =>
            //loginWithRedirect({
              //authorizationParams: {
                //screen_hint: "signup", // signup abre el flujo de regisrto de Auth0
              //},
            //})
          //}
          className="w-[176px] h-[40px] mx-[142px] mb-[20px] text-[18px] flex items-center justify-center bg-[#1B1B1F] hover:bg-neutral-800 text-white rounded-[20px] shadow-[0_6px_10px_rgba(0,0,0,0.6)] border-[#73A7DD] border-[2px]"
        >
          {isLoading ? "Cargando..." : "Registrarte"}
        </button>

        {/* Botón Google */}
        <button
          onClick={() =>
            loginWithRedirect({
              authorizationParams: {
                connection: "google-oauth2",
                screen_hint: "signup", // también abre registro con Google
              },
            })
          }
          className="w-[176px] h-[40px] mx-[142px] mb-[40px] text-[18px] flex items-center justify-center bg-[#1B1B1F] hover:bg-neutral-800 text-white rounded-[20px] shadow-[0_6px_10px_rgba(0,0,0,0.6)] "
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Google
        </button>

        {/* Enlace login */}
        <p className="text-gray-400 text-xs mt-2">
          <a href="/login" className="text-[#D868A0] text-[15px]"><u>Inicia Sesión</u></a>{" "}
          <a className="text-white text-[15px]">si ya tienes una cuenta</a>
        </p>

        {/* Errores */}
        {error && (
          <p className="text-red-400 text-sm mt-4">
            Error: {error.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default function RegisterCard() {
  const domain = import.meta.env.PUBLIC_AUTH0_DOMAIN;
  const clientId = import.meta.env.PUBLIC_AUTH0_CLIENT_ID;
  const redirectUri =
    import.meta.env.PUBLIC_AUTH0_REDIRECT_URI || window.location.origin;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
      cacheLocation="localstorage"
    >
      <div className="flex justify-center items-center h-screen">
        <Card />
      </div>
    </Auth0Provider>
  );
}
