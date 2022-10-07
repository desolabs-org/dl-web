import { createRoot } from 'react-dom/client'
import * as React from 'react'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import LandingPage from './LandingPage'

const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
  ]);

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
