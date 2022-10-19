import { createRoot } from 'react-dom/client'
import * as React from 'react'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import DefaultLayout from './layout/DefaultLayout'
import LandingPage from './pages/landing/LandingPage'
import HackathonPage from './pages/hackathon/HackathonPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
    {
      path: "*",
      element: <DefaultLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "hackathon/2022",
          element: <HackathonPage />,
        },
      ]
    },
  ]);

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
