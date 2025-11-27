import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import Inicial from './pages/inicial.jsx'
import TelaLogin from './pages/Login.fundo.jsx'
import TelaCadastro from './components/cadastro.jsx'
import Menu from './pages/menu.jsx'
import Cesto from './pages/cesto.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicial/>

  },
  {
    path: '/login',
    element: <TelaLogin/>
  },
  {
    path: '/cadastro',
    element: <TelaCadastro/>
  },
  {
    path: '/menu',
    element: <Menu/>
  },
  {
    path: '/cesto',
    element: <Cesto/>

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
