// import React, { useState } from 'react';
import React from "react";
import '../App.css';
import will from '../assets/will_925x782.png'; // gives image path


const Resources = () => {
  return (
        <div className="bg">
            <h1>RESOURCES</h1>
            {' '}
            <a href= "https://www.tsa.gov/travel/security-screening" color = "white">TSA Security Screening</a>
            {' '}
            <p><br></br></p>
            <a href="https://www.tsa.gov/precheck/map" color = "white">TSA Precheck Airports and Airlines</a>
            {' '}
            <img src={will} alt="Will the Packmate" width="700" height="550" className="center"/>
        </div>
    );
};

export default Resources;
