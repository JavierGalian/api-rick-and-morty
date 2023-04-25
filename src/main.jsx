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
    path: 'api-rick-and-morty/',
    element: <App/>
  },
  {
    path: 'api-rick-and-morty/episodes',
    element: <PageEpisodes/>
  },
  {
    path: 'api-rick-and-morty/characters',
    element: <PageCharacters/>
  },
  {
    path: 'api-rick-and-morty/locations',
    element: <PageLocations/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
