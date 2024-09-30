import { useState, createContext } from "react";


const UsuarioContext = createContext();

const UsuarioProvider = ( {children } ) => {

    const [usuario, setUsuario] = useState( localStorage.getItem('usuario') );


    const login = (datosUsu) => {

        localStorage.setItem('usuario',datosUsu) //me permite gaurdar la sesion y si reinicio queda abierta
        setUsuario(datosUsu)
    }

    const logout = () => {

        localStorage.removeItem('usuario')
        setUsuario(null)
    }

    return (

        <UsuarioContext.Provider value = { {usuario,login,logout} }>

        {children}

        </UsuarioContext.Provider>
    )

}

export {UsuarioContext,UsuarioProvider}
