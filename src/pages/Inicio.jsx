import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


function Inicio() {

    const [tresVideojuegos, setTresVideojuegos] = useState([]);

    useEffect( () => { //el url se pone en una variable de entorno para mayor seguridad
        //y se reemplaza con import.meta.env.VITE_URL_VIDEOJUEGOS

        axios.get(import.meta.env.VITE_URL_VIDEOJUEGOS).then(resultados => {

            //console.log(resultados.data); para ver que traiga los datos
            setTresVideojuegos(resultados.data);
        })


    }, []); 


    if (tresVideojuegos == []) {
      return <p>Cargando...</p>
    }

  return (

    <>

    <h2> Bienvenido a VAPOR </h2>
    <p>Estas son nuestras tres últimas reviews. ¡Disfrutalas!</p>

    {tresVideojuegos.map( videojuego => {

        return <div key={videojuego.id_videojuegos}> 

        <h3> {videojuego.nombre} </h3>
        <p> {videojuego.review} </p>
        <p> Puntuación: {videojuego.puntuacion} sobre 10 </p>
        <h5> Escrito por: {videojuego.usuario_escritor} </h5>


        </div>
    })}
    
    </>
  )
}

export default Inicio;
