import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Ok from './Component/ok.jsx'
import Favorites from './Component/Favorites.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    Component: App,   //Parent Router Still same at all time
    children: [       //Children Component that routes with outlet while required
      {
        path: '/favorites',
        element: <p>Favorite Place</p>,
        children: [{
          path: '/more-nested',
          element: <Favorites></Favorites>
        }]
      },
      {
        path: 'ok',
        Component: Ok
      }

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
