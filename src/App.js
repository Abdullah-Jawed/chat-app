import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import router from './Router';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return (
   <RouterProvider router={router} />
  )
}

export default App