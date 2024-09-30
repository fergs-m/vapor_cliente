import React, {useRef} from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Todas() {
    
    const [datosResena, setDatosResena] = useState([]);

    //const [filtro,setFiltro] = useState(0); esto es si lo hicieramos con useState

    let refFiltro = useRef();

    let {VITE_URL_VIDEOJUEGOS} = import.meta.env;

    useEffect( () => {

       // console.log(VITE_URL_VIDEOJUEGOS+'/todas/todasResenas')
        axios.get(VITE_URL_VIDEOJUEGOS+'/todas/todasResenas').then(resultado => {

            setDatosResena(resultado.data);

        });


    },[]);

    function buscarResena(e){

        e.preventDefault(); 

        let puntuacion = refFiltro.current.value;

        axios.get(VITE_URL_VIDEOJUEGOS+'/filtrar/'+puntuacion).then(resultados => {

            setDatosResena(resultados.data)
        })


    }

  return (
    <>

    <form action="#" method='get' onSubmit={buscarResena}>

    <label htmlFor="fil"> Filtrar por puntuación</label>

    <input type="number" name='filtrado' id='fil' ref={refFiltro} />

    <input type="submit" value='Buscar' />

    </form>

    <h1> Estas son todas las review</h1>
    
    {datosResena.map( resena => {

        return <div key={resena.id_videojuegos}>

            <h3> {resena.nombre} </h3>

            <pre> {resena.review} </pre>

            <p>Puntuacion: {resena.puntuacion} </p>

            <p> Publicado por: {resena.usuario_escritor} </p>



        </div>



    })}
    </>
  )
}

export default Todas
