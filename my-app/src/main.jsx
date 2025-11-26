import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Inicial from './pages/inicial.jsx'
import TelaLogin from './pages/Login.fundo.jsx'
import Menu from './pages/menu.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Inicial/>
  </StrictMode>,
)
