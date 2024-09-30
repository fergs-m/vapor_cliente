import React from 'react'
import { useContext } from 'react'
import { UsuarioContext } from '../contexto/UsuarioContext'
import { useNavigate } from 'react-router-dom';


function Logout() {

    const {logout} = useContext(UsuarioContext); 

    const redirect = useNavigate();

    function noQuiero() {

      redirect('/')
    }

    function siQuiero() {

        logout();
    }
    
  return (
    <> 
    

    <h1> ¿Estás seguro de que quieres cerrar sesión? </h1>

    <br />

    <button type='button' onClick={noQuiero}> No </button>

    <button type='button' onClick={siQuiero}> Si </button>

    
    </>
  )
}

export default Logout
