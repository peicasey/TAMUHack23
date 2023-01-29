// import React, { useState } from 'react';
import React from "react";
import '../App.css';
import will from '../assets/will_925x782.png'; // gives image path


const NoMatch = () => {
  return (
        <div className="bg">
            <h1 className="padded">Oops! We can't find that!</h1>
            <img src={will} alt="Will the Packmate" width="700" height="550" className="center"/>
        </div>
    );
};

export default NoMatch;
