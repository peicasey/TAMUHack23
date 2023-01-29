// import React, { useState } from 'react';
import React from "react";
import { 
    Form,
    Button,
  } from 'reactstrap'
import '../App.css';
import will from '../assets/will_925x782.png'; // gives image path

const Result = () => {
  return (
        <div className="bg">
            <h1>RESULTS</h1>
            <Form>
                <Button
                    href="/packing"
                    tag='a'>
                    Back
                </Button>
            </Form>
            <h2>Didn't get to implementing this</h2>
            <div className="padded">
                <img src={will} alt="Will the Packmate" width="700" height="550" className="center"/>
            </div>
        </div>
    );
};

export default Result;
