import React from 'react'
import axios from 'axios'//para hacer peticiones mas detalladas
import { useState, useRef, useContext} from 'react'//useRef es para usar en input
import { UsuarioContext } from '../contexto/UsuarioContext';
import { useNavigate } from 'react-router-dom';

function Login() {

  const redireccionar = useNavigate();

  const {login } = useContext(UsuarioContext)

 const [error, setError] = useState(''); //para que cuando usuario falle diga 'contraseña no encontrada'

 const usuarioRef = useRef();

 const contraRef = useRef(); //se señala en el input con el cual estara relacionado


  function checkearUsuario (e) {

    e.preventDefault(); 

    let objetoAMandar = { //estos datos se envian a traves de axios

      usuario : usuarioRef.current.value,  //current es para apuntar el valor que esta tomando
      contrasena: contraRef.current.value

    }

    axios.post('https://vapor-server.vercel.app/usuarios', objetoAMandar).then( datos => {

      //console.log(datos.data)

      if (datos.data.mensajeError == 'Usuario no encontrado') {

        setError('Usuario no enconrado');

      } else {

        login(datos.data.nombre);
        redireccionar('/')
      }
    })



  }

  return (
   <>

   <form action="#" method='post' onSubmit={checkearUsuario}>

    <label htmlFor="usu"> Nombre de usuario: </label>
    <input type="text" name='usuario' id='usu' ref={usuarioRef} />
    <br />
    <label htmlFor="pass" > Contraseña: </label>
    <input type="password" name='password' id='pass' ref={contraRef}/>
    <br />
    <input type="submit" value='Iniciar Sesion' />

   </form>

   {error}
   
   </>
  )
}

export default Login
