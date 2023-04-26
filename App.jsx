import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './src/ui/components/Menu'
import Login from './src/pages/Login'
import Cadastro from './src/pages/Cadastro'
import Perfil from './src/pages/Perfil'
import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './src/ui/components/Footer'
import Contatos from './src/pages/Contatos';
import Sobre from './src/pages/Sobre';
import Coleta from './src/pages/Coleta'
import EsquecerSenha from './src/pages/EsquecerSenha'
import Admin from './src/pages/Admin'
import Home from './src/pages/Home'

import { AuthProvider } from './src/contexts/AuthContext.jsx'

function App() {

  return (
    <>
      <AuthProvider>
        <Menu />
        <Routes>
          <Route path="perfil" element={<Perfil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contato" element={<Contatos />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/coleta" element={<Coleta />} />
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/Redefinir" element={<EsquecerSenha />}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/" element={<Home/>}/>
          <Route/>
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
