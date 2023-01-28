import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Add_Bags from "./components/New_Trip";
import Add_Items from "./components/Add_Items";
import Home from "./components/Home";
import Result from "./components/Result";

import React from 'react';

function App() {
  const value = 'World';
  return (
    
    <div>
      <h1 className="intro">
        Hello world!
      </h1>

      
      <Navbar />
      <Home />
    </div>
  );

}

export default App;
