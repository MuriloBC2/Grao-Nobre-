import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Inicial from './pages/inicial.jsx'
import TelaLogin from './pages/Login.fundo.jsx'
import Menu from './pages/menu.jsx'
import Cesto from './pages/cesto.jsx'
import  ScrollToTop from './ScrolltoTop.jsx'

function Root() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Inicial /> },
      { path: 'login', element: <TelaLogin /> },
      { path: 'menu', element: <Menu /> },
      { path: 'cesto', element: <Cesto /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
