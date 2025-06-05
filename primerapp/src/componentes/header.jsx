import React from "react";
import IMG from '../React.png';
import { useState } from 'react';
import Style from '../styles/header.module.css'; // Asegúrate de importar estilos

export default function Header() {
  const [state, setState] = useState(true);

  function cambioState() {
    setState(!state); // más simple y limpio
  }

  return (
    <header className={Style.headerstyle}>
      <button  onClick={cambioState}>Cambiar Estado</button>
                 <img src={IMG}/>

      <ol>
        {state ? (
          <>
          
            <li>
              <a href="https://www.youtube.com">Inicio</a>
            </li>
            <li className={Style.liStyle}>
              <a href="https://www.youtube.com">Servicios</a>
            </li>
          </>
        ) : (
             <>
          <li>
            <a href="https://www.youtube.com">Acerca de</a>
           
          </li>
         <img src={IMG}/>
          </>
        )}
      </ol>
    </header>
  );
}