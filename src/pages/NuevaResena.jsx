import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef, useContext} from 'react'
import { UsuarioContext } from '../contexto/UsuarioContext'
import axios from 'axios'

function NuevaResena() {

    let refNombre = useRef();
    let refReview = useRef();
    let refPuntuacion = useRef();

    const {usuario} = useContext(UsuarioContext);

    const {VITE_URL_VIDEOJUEGOS} = import.meta.env;

    const redirect = useNavigate();

    function crearVideojuego(e) {

        e.preventDefault();

        let objetoAEnviar = {

            nombre: refNombre.current.value,
            review: refReview.current.value,
            puntuacion: refPuntuacion.current.value,
            usuario_escritor: usuario 
        }

        axios.post(VITE_URL_VIDEOJUEGOS, objetoAEnviar).then(resultados => {

          if(resultados.data.insercion == 'Okay'){

            redirect('/resenas')
          }
        });

    }

  return (

    <>
    
    <form action="#" method='post' onSubmit={crearVideojuego}>

        <label htmlFor="nom"> Nombre del videojuego </label>
        <input type="text" name='nombre' id='nom' ref={refNombre} />
        <br />
        <br />
        <label htmlFor="rev"> ¿Que opinas sobre él?</label>
        <br />
        <textarea name="review" id="rev" ref={refReview}></textarea>

        <br />
        <br />

        <label htmlFor="punt">¿Puntuación?</label>
        <input type="text" name='puntuacion' id='punt' ref={refPuntuacion} />
        <br />

        <input type="submit" value='Enviar Reseña' />

    </form>

    </>
  )
}

export default NuevaResena
