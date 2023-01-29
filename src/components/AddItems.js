// import React, { useState } from 'react';
import React from "react";
import '../App.css';
import will from '../assets/will_925x782.png'; // gives image path


const AddItems = () => {
  return (
        <div className="bg">
            <h1>ITEMS</h1>
            <img src={will} alt="Will the Packmate" width="700" height="550" className="center"/>
        </div>
    );
};

export default AddItems;
