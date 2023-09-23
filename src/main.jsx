import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Details from './components/Details/Details';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root></Root>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/appliedJobs',
        element : <AppliedJobs></AppliedJobs>
      },
      {
        path : '/details/:detailsId',
        element : <Details></Details>,
        loader : ({params}) => fetch(`http://localhost:5173/details/${params.detailsId}`)
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
