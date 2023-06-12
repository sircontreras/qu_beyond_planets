import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import PlanetListPage from "./pages/PlanetListPage";
import PlanetContext from "./components/PlanetContext";
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
    path : '/planets/:name',
    element : <PlanetDetails/>
  }
]);

function App() {
  return (
     <PlanetContext>
       <RouterProvider router={router}/>
     </PlanetContext>
  );
}

export default App;
