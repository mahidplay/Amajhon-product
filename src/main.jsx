import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import myFirstRoute from './Route/Route'

// const myFirstRoute = createBrowserRouter ([
//     {
//       path:'/',
//       element:<MainLayout></MainLayout>,
//       children:[
//         {
//           path:'/about',
//           element:<Home></Home>
//         },
//         {
//           path:'product',
//           element:<Products></Products>
//         }
//       ]
//     }
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myFirstRoute}></RouterProvider>
  </React.StrictMode>,
)
