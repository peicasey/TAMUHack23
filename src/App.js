// react
import React from 'react';

// components
import NavComponent from "./components/NavComponent";
// import Login from "./components/Login";
import NewTrip from "./components/NewTrip";
// import AddItems from "./components/AddItems";
import Home from "./components/Home";
import Result from "./components/Result";
import NoMatch from "./components/NoMatch";

// modules
// import { Button } from 'reactstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// styling
import './App.css';

function App() {
  
  return (

    <div>
      <div>proof that something is working :D</div>

      <NavComponent />

      <Router>
        <Routes>
          <Route path='/' element={<Home/ >}/>
         <Route path='/newtrip' element={<NewTrip/ >}/>
         <Route path='/result' element={<Result/ >}/>
         <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
