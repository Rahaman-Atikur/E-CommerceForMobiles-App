import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Ok from './Component/ok.jsx'
import Favorites from './Component/Favorites.jsx'
import Shuvo from './Component/Shuvo.jsx'
import Another from './Component/Another.jsx'
const router = createBrowserRouter([{
  path: '/',
  Component: App,
  children: [{
    path: 'shuvo',
    Component: Shuvo,
    children: [{
      path: 'another',
      Component: Another
    }]
  }]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
