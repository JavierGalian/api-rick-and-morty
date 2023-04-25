import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.css';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageEpisodes from './pages/pageEpisodes';
import PageCharacters from './pages/pageCharacters';
import PageLocations from './pages/pageLocations';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/episodes',
    element: <PageEpisodes/>
  },
  {
    path: '/characters',
    element: <PageCharacters/>
  },
  {
    path: '/locations',
    element: <PageLocations/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
