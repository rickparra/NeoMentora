import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './index.css'

import Error404 from './routes/Error404'
import Home from './routes/Home'
import Login from './routes/Login/index.tsx'
import JovensImpactados from './routes/JovensImpactados/index.tsx'
import Canditatese from './routes/Canditatese/index.tsx'
import Contato from './routes/Contato/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/jovens",
        element: <JovensImpactados />
      },
      {
        path: "/canditate-se",
        element: <Canditatese />
      },
      {
        path: "/contato",
        element: <Contato />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
