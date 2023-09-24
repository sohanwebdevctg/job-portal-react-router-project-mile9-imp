import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Details from './components/Details/Details';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root></Root>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : () => fetch('features.json')
      },
      {
        path : '/details/:detailsId',
        element : <Details></Details>,
        loader : ({params}) => fetch(`http://localhost:5173/details/${params.detailsId}`)
      },
      {
        path : '/appliedJobs',
        element : <AppliedJobs></AppliedJobs>
      },
      {
        path : '/statistics',
        element : <Statistics></Statistics>
      },
      {
        path : '/blog',
        element : <Blog></Blog>
      },
      {
        path : '*',
        element : <h1>404 page not found</h1>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
