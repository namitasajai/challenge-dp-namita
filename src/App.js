import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import Results from './components/Results';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/results',
    element: <Results/>
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
