import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'
import Home from './routes/Home'
import Error from './routes/Error'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)