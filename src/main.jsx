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
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : () => fetch('/features.json')
      },
      {
        path : '/details/:id',
        element : <Details></Details>,
        loader : () => fetch('/features.json')
      },
      {
        path : '/appliedJobs',
        element : <AppliedJobs></AppliedJobs>,
        loader : () => fetch('/features.json')
      },
      {
        path : '/statistics',
        element : <Statistics></Statistics>
      },
      {
        path : '/blog',
        element : <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
