import React from "react"
import Card from './card.jsx'
import Style from '../styles/cards.module.css'
import cafes from './cafes.js';

export default function Main(){
return(
<main> {cafes.map((e)=>{return(
<div className={Style.contentCard}>
      <Card
        key={e.nombre}
        Nombre={e.nombre}
        Cuerpo={e.cuerpo}
        Origen={e.origen}
      />
  </div>
)})} </main>
)
}