// react
import React from 'react';

// components
import NavComponent from "./components/NavComponent";
// import Login from "./components/Login";
import NewTrip from "./components/NewTrip";
// import AddItems from "./components/AddItems";
import Home from "./components/Home";
import Result from "./components/Result";

// modules
// import { Button } from 'reactstrap';
import { Routes, Route } from 'react-router-dom';

// styling
import './App.css';

function App() {
  
  return (

    <div className="app bg" dark>
      <NavComponent />
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/newtrip' element={<NewTrip/>}></Route>
         <Route path='/result' element={<Result/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
