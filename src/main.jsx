import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Suspense } from 'react'
import Header from './componets/Header'
import Inicio from './pages/Inicio'
import Login from './pages/Login'
import Logout from './pages/Logout'
import RutaPrivada from './componets/RutaPrivada'
import MisResenas from './pages/MisResenas'
import NuevaResena from './pages/NuevaResena'
import EditarResena from './pages/EditarResena'
import BorrarResena from './pages/BorrarResena'
import Todas from './pages/Todas'
import { UsuarioProvider } from './contexto/UsuarioContext'


createRoot(document.getElementById('root')).render(
  <>

  <Router> 

  <UsuarioProvider> 

  <Header/>

  <Suspense fallback= {<p> Cargando...</p>}>

  <Routes>
    
    <Route path='/' element= {<Inicio/>} /> 

    <Route path='/login' element= {<Login/>} /> 

    <Route path='/logout' element= {<RutaPrivada ComponenteQueQuieroPintar={<Logout/>}/>} /> 

    <Route path='/resenas' element={<RutaPrivada ComponenteQueQuieroPintar={<MisResenas/>}/>}  />

    <Route path='/nuevaResena' element={<RutaPrivada ComponenteQueQuieroPintar={<NuevaResena/>}/>}  />

    <Route path='/editarResena/:id' element={<RutaPrivada ComponenteQueQuieroPintar={<EditarResena/>}/>}  />

    <Route path='/borrarResena/:id' element={<RutaPrivada ComponenteQueQuieroPintar={<BorrarResena/>}/>}  />
  
    <Route path='todas' element={<Todas/>} /> 
  </Routes>





  </Suspense>


  </UsuarioProvider>

  </Router>
  
  
  </>
)
