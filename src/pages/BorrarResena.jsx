import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function BorrarResena() {

    let {id} = useParams(); 

    let navegacion = useNavigate();

    let {VITE_URL_VIDEOJUEGOS} = import.meta.env;

    function noPorfa(){

        navegacion('/resenas')
    }

    function siPorfa(){//se debe crear en videojuegosRouter una ruta que me permita eliminar los datos y luego en videojuegosController
      //crear esta funcion para que el servidor sea capaz de eliminar los datos em mysql

        axios.delete(VITE_URL_VIDEOJUEGOS+'/'+id).then( respuesta => {

          if(respuesta.data.borrar == 'Okay'){ //aqui lo que se dice es que si la respuesta de data en axios donde esta borrar es igual a 'okay' me llevara
            //a la pagina de resena una vez borrados 

            navegacion('/resenas')
          }



        })


    }


  return (
    <>

    <h2> ¿Estás seguro que deseas borrar este registro?</h2>

    <button type='button' onClick={noPorfa}> No </button>

    <button type='button' onClick={siPorfa}>Si</button>
    
    </>
  )
}

export default BorrarResena
