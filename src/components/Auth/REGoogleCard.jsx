import React from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

function Card(){
    
    return(
        <div className="flex h-screen">
            <div className="bg-[#202127] rounded-[20px] shadow-5xl w-[460px] h-[430px] mx-[730px] my-[325px] text-center shadow-[0_6px_10px_rgba(0,0,0,0.5)]">
                <h2 className="text-white font-bold text-[32px] mx-[136px] my-[60px]"> Regístrate con Google</h2>
                
                {/*Inputs*/}
                <input 
                type="text" 
                placeholder="Nombre de usuario"
                className="text-white font-bold text-[18px] w-[340px] h-[40px] p-[20px] mx-[60px] mb-[30px] rounded-[10px] bg-[#32363F] focus:placeholder-transparent"
                />

                {/*Botón*/}
                <button
                 className="w-[176px] h-[40px] mx-[142px] mb-[40px] text-[18px] flex items-center justify-center bg-gradient-to-r from-[#1B1B1F] to-[#1B1B1F] hover:from-[#73A7DD] hover:to-[#73A7DD] text-white rounded-[20px] shadow-[0_6px_10px_rgba(0,0,0,0.6)] border-[2px] border-[#73A7DD]">
                    Registarte
                </button>

                <p className="text-[#FFFFFF] text-[15px] mt-[40px]">
                   <a href="/login"
                      className="text-[#D868A0]"
                   > <u>Inicia sesión</u></a> <a className=""> si aún no tienes una cuenta</a>
                   
                </p>      
            </div>

        </div>
    )
}

export default function REGoogleCard(){
    return(

        <div className="flex justify-center items-center h-screen">
            <Card />
        </div>
    
    );
}
