import React from "react";
import Style from '../styles/cards.module.css';
import Imagen from '../Cafe.jpg';


export default function Card({Nombre, Origen, Cuerpo}){
    return(
        <div className={Style.card}>
            <p className={Style.cardTitulo}>
                {Nombre}
            </p>
            <img src={Imagen} alt="Café" />
            <p className={Style.cardOrigen}>
                {Origen}
            </p>
            <p className={Style.cardCuerpo}>
                {Cuerpo}
            </p>
        </div>
    )
};
