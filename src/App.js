import Nav_Component from "./components/Nav_Component";
// import Login from "./components/Login";
// import Add_Bags from "./components/New_Trip";
// import Add_Items from "./components/Add_Items";
import Home from "./components/Home";
// import Result from "./components/Result";
import { Button } from 'reactstrap';
import React from 'react';

function App() {
  
  return (
    <div>
      <Nav_Component />
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-4xl text-center">
          CAN IT FLY?
        </h1>
        <h2>
          ASK PACKMATE AND FIND OUT
        </h2>
      <Home />
      <Button color="danger">Danger!</Button>
      </div>
    </div>
  );

}

export default App;
