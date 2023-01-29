// import React, { useState } from 'react';
import React from "react";
import { 
    Form,
    Button,
    Progress
  } from 'reactstrap'
import '../App.css';
import will from '../assets/will_925x782.png'; // gives image path

const Result = () => {
  return (
        <div className="bg">
            <h1>RESULTS</h1>
            <h2>We've calculated that 86.5% of your items abide all guidelines!</h2>
            <div className="padded">
                <Progress
                animated
                color="warning"
                value={39}
                />
                <Form>
                    <Button
                        href="/packing"
                        tag='a'>
                        Back
                    </Button>
                </Form>
                <div className="padded">
                    <img src={will} alt="Will the Packmate" width="700" height="550" className="center"/>
                </div>
            </div>
        </div>
    );
};

export default Result;
