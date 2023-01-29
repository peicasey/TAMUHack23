import NavComponent from "./components/NavComponent";
// import Login from "./components/Login";
import NewTrip from "./components/NewTrip";
// import AddItems from "./components/AddItems";
import Home from "./components/Home";
<<<<<<< HEAD
import Result from "./components/Result";
// import { Button } from 'reactstrap';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';

function App() {
  
=======
// import Result from "./components/Result";

import React from "react";

function App() {
  const value = "World";
>>>>>>> 695d7c9 (3 ry)
  return (
<<<<<<< HEAD
    <div className="app bg" dark>
      <NavComponent />
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/newtrip' element={<NewTrip/>}></Route>
         <Route path='/result' element={<Result/>}></Route>
      </Routes>

=======
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-4xl text-center">
          Tailwind CSS makes styling React components easier!
        </h1>
<<<<<<< HEAD
      <button className="bg-black text-white p-2.5 w-fit mt-9 ">
        Get Started
      </button>
      <Button variant="contained">Contained</Button>
=======
        <Home />
        <button className="bg-black text-white p-2.5 w-fit mt-9 ">
          Get Started {value}
        </button>
        <Button variant="contained">Contained</Button>
>>>>>>> 695d7c9 (3 ry)
      </div>
>>>>>>> 18cba08 (am ryan)
    </div>
  );
}

export default App;
