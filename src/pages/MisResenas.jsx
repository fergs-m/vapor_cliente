import React from 'react'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UsuarioContext } from '../contexto/UsuarioContext'

function MisResenas() {

    const [resenas, setResenas] = useState([]); //inicialmente recibiremos un array vacio

    const {usuario} = useContext(UsuarioContext);

    const {VITE_URL_VIDEOJUEGOS} = import.meta.env; 

    useEffect( () => {

      axios.get(VITE_URL_VIDEOJUEGOS+'/'+usuario).then(resultado => {

        setResenas(resultado.data);

      })
      
      
      //+ pq se añade algo mas a la ruta y dependiendo de que se quiera mostrara se agrega la otra variable, en este caso quiero 
      //que la reseña que escribio el usuario se muestre


    },[]);


  return (

    <>

    <h2> Estas son sus reseñas: </h2>


    {resenas.map( resena => {

       return <div key={resena.id_videojuegos}>  
       
       <h3> Nombre: {resena.nombre}  </h3>

       <p> Review: {} </p>

       <pre> {resena.review} </pre>

       <p>Puntuación: {resena.puntuacion} </p>

       <Link to={'/editarResena/'+resena.id_videojuegos}> Editar mis reseñas </Link> {/*/editarResena/'+resena.id_videojuegos me permite que se asocie el id del juego con cada modificacion, se le hace una ruta dinamica a cada link*/}

       <Link to={'/borrarResena/'+resena.id_videojuegos}> Borrar reseña </Link> 
       </div>

    })}

    
<Link to={'/nuevaResena'}> Crear reseña </Link>


    </>
  )
}

export default MisResenas
