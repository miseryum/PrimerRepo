import React from "react"
import Style from '../styles/main.module.css'
const cafes= [   
    {
      "nombre": "Etiopía Yirgacheffe",
      "origen": "Etiopía",
      "acidez": "Alta",
      "amargura": "Baja",
      "notas_de_sabor": ["Floral", "Cítrico", "A té"],
      "metodos_recomendados": ["V60 / Pour Over", "Cold Brew"],
      "proceso": "Lavado",
      "nivel_de_tueste": "Claro",
      "contenido_de_cafeina": "Medio",
      "cuerpo": "Ligero",
      "aroma": "Jazmín, Bergamota"
    },
    {
      "nombre": "Colombiano Supremo",
      "origen": "Colombia",
      "acidez": "Media",
      "amargura": "Media",
      "notas_de_sabor": ["Chocolate", "Caramelo", "Nueces"],
      "metodos_recomendados": ["Cafetera de goteo", "Prensa francesa"],
      "proceso": "Lavado",
      "nivel_de_tueste": "Medio",
      "contenido_de_cafeina": "Medio",
      "cuerpo": "Medio",
      "aroma": "Dulce, a nuez"
    },
    {
      "nombre": "Sumatra Mandheling",
      "origen": "Indonesia",
      "acidez": "Baja",
      "amargura": "Alta",
      "notas_de_sabor": ["Terroso", "Especiado", "Herbal"],
      "metodos_recomendados": ["Espresso", "Prensa francesa"],
      "proceso": "Semi-lavado (Wet-Hulled)",
      "nivel_de_tueste": "Oscuro",
      "contenido_de_cafeina": "Alto",
      "cuerpo": "Completo",
      "aroma": "Terroso, Tabaco"
    },
    {
      "nombre": "Guatemala Antigua",
      "origen": "Guatemala",
      "acidez": "Media-Alta",
      "amargura": "Baja-Media",
      "notas_de_sabor": ["Cacao", "Especias", "Floral"],
      "metodos_recomendados": ["V60 / Pour Over", "Espresso"],
      "proceso": "Lavado",
      "nivel_de_tueste": "Medio",
      "contenido_de_cafeina": "Medio",
      "cuerpo": "Medio a completo",
      "aroma": "Especiado, Floral"
    },
    {
      "nombre": "Brasil Santos",
      "origen": "Brasil",
      "acidez": "Baja",
      "amargura": "Media",
      "notas_de_sabor": ["Nueces", "Chocolate", "Dulce"],
      "metodos_recomendados": ["Cafetera de goteo", "Espresso"],
      "proceso": "Natural (Secado al sol)",
      "nivel_de_tueste": "Medio",
      "contenido_de_cafeina": "Alto",
      "cuerpo": "Medio",
      "aroma": "Chocolate, Nueces tostadas"
    }
  ]


export default function Main(){
return(
<main> {cafes.map((e)=>{return(
<div className={Style.contentCard}>
    <div className={Style.card}>
        <p className={Style.Nombre}>Nombre: {e.nombre}</p>
        <p className={Style.origen}>Origen: {e.origen}</p>
        <p className={Style.acidez}>Acidez: {e.acidez}</p>
        <p className={Style.cuerpo}>Cuerpo: {e.cuerpo}</p>
    </div>
    </div>
)})} </main>
)
}