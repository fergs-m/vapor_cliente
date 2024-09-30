import React from 'react'
import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function EditarResena() {

    let refNombre = useRef();

    let refPuntuacion = useRef();

    let refReview = useRef(); 

    let {id} = useParams(); //se importa dese el main para la ruta dinamica

    let {VITE_URL_VIDEOJUEGOS} = import.meta.env; 

    let navigation = useNavigate();

    useEffect( () => { //que videojuego es una ruta que se hara para que nos traiga un videojuego en base a su id

        axios.get(VITE_URL_VIDEOJUEGOS+'/queVideojuego/'+id).then(resultados => {

           // console.log(resultados.data) VER EN CONSOLA DE NAVEGADOR

            refNombre.current.value = resultados.data.nombre;
            refPuntuacion.current.value = resultados.data.puntuacion;
            refReview.current.value= resultados.data.review;


        })

    },[])

    function editarReview(e){

        e.preventDefault();

        let datosAEnviar = {

            id_videojuegos: id,
            nombre: refNombre.current.value,
            puntuacion:  refPuntuacion.current.value,
            review:  refReview.current.value
        }

        //put es para editar los datos
        axios.put(VITE_URL_VIDEOJUEGOS, datosAEnviar).then(respuestas => {

            if (respuestas.data.mensaje == 'Okay'){

                navigation('/resenas')
            }


        })
    }

  return (
    
    <>

    <form action="#" method='post' onSubmit={editarReview}>

        <label htmlFor="nom"> Nombre del videojuego </label>
        <input type="text" name="nombre" id="nom" ref={refNombre} /> 
        <br />
        <label htmlFor="punt"> Puntuación: </label>
        <input type="text" name='puntuacion' id='punt' ref={refPuntuacion} />
        <br />
        <label htmlFor="rev"> Review: </label>
        <br />
        <textarea name="review" id="rev" ref={refReview}></textarea>
        <br />
        <input type="submit" value='Editar' />


    </form>
    
    
    
    </>
  )
}

export default EditarResena
