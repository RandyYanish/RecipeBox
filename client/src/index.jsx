// packages
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './index.css';
import App from './App';

// pages
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import ErrorPage from './pages/errorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='' element={<HomePage />} />
      <Route path='login' element={< LoginPage/>} />

      <Route path='*' element={<ErrorPage/>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
