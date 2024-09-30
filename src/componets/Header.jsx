import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UsuarioContext } from '../contexto/UsuarioContext'

function Header() {

const {usuario} = useContext(UsuarioContext)// useContext(UsuarioContext).usuario me traera en un console.log la info que quiero, pero como la viariable
//se llama igual que lo que quiero, le puedo poner { } al nombre y me ahorro el paso del .usuario. A esto se le llama desestructurar el objeto
//este usuario viene de UsuarioContext


//la idea es que si no esta logeado me aparezca 'login', si ya esta logeado que aparezca 'logout'.
//abajo lo que dice es que si usuario es nulo me aparezca el link login 
  return (
    <>

    <header> 

         <ul> 

          <li> <Link to={'/'}> Inicio </Link> </li>

         { usuario == null ? <li> <Link to={'/login'}> Login </Link> </li> : <> <li> Bienvenido  {usuario} </li> </> }

         {usuario != null ? <li> <Link to={'/logout'}> Cerrar sesión </Link></li> : <> </>} {/*si el usuario esta logeado que aparezca un link con cerrar sesion, si no, que no aparezca nada*/}

          {usuario != null ? <li> <Link to={'/resenas'}> Mis reseñas </Link> </li> : <> </>}


        <li> <Link to={'/todas'}> Ver reseñas </Link></li>
        </ul>



    </header>
    
    </>
  )
}

export default Header
