import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PlanetListPage from "./pages/PlanetListPage";

const router = createBrowserRouter([
  {
    path : '/',
    element : <PlanetListPage/>
  }
]);

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
