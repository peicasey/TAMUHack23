import Navbar from "./components/Navbar";
// import Login from "./components/Login";
// import Add_Bags from "./components/New_Trip";
// import Add_Items from "./components/Add_Items";
import Home from "./components/Home";
// import Result from "./components/Result";

import React from 'react';

function App() {
  const value = 'World';
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-4xl text-center">
          Tailwind CSS makes styling React components easier!
        </h1>
      <button className="bg-black text-white p-2.5 w-fit mt-9 ">
        Get Started
      </button>
      </div>
    </div>
  );

}

export default App;
