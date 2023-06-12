import React from 'react';
import './App.css';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import PlanetListPage from "./pages/PlanetListPage";
import PlanetDetails from "./pages/PlanetDetails";

const router = createBrowserRouter([
  {
    path : '/',
    element : <Navigate to='/planets'/>
  },
  {
    path : '/planets',
    element : <PlanetListPage/>
  },
  {
    path : '/planets/:id',
    element : <PlanetDetails/>
  }
]);

function App() {
  return (
       <RouterProvider router={router}/>
  );
}

export default App;
