import NavComponent from "./components/NavComponent";
// import Login from "./components/Login";
// import AddBags from "./components/NewTrip";
// import AddItems from "./components/AddItems";
import Home from "./components/Home";
// import Result from "./components/Result";
import { Button } from 'reactstrap';
import './App.css';
import React from 'react';

function App() {
  
  return (
    <div className="app bg" dark>
      <NavComponent />
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-4xl text-center">
          CAN IT FLY?
        </h1>
        <h2 className="text-4xl text-center">
          ASK PACKMATE AND FIND OUT
        </h2>
      <Home />
      <Button color="info">Add Bags</Button>
      </div>
    </div>
  );

}

export default App;
