// react
import React from 'react';

// components
import NavComponent from "./components/NavComponent";
import NewTrip from "./components/NewTrip";
import Packing from "./components/AddBags";
import Items from "./components/AddItems";
import Home from "./components/Home";
import Result from "./components/Result";
import Resources from "./components/Resources";
import NoMatch from "./components/NoMatch";

// modules
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// styling
import './App.css';

function App() {
  
  return (

    <div className="app bg">
      <NavComponent />

      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/newtrip' element={<NewTrip />}/>
          <Route path='/packing' element={<Packing />}/>
          <Route path='/items' element={<Items />}/>
          <Route path='/result' element={<Result />}/>
          <Route path='/resources' element={<Resources />}/>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
