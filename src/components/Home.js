// import React, { useState } from 'react';
import React from "react";

// import CollapseTxt from "./CollapseTxt";
import { Button, Collapse, Alert } from 'reactstrap';
import will from '../assets/will_925x782.png'; // gives image path

import '../App.css';

const Home = () => {

    // var blurb1 = "Find out about what TSA Guidelines might apply to you!"
    // var blurb2 = "Learn sneaky Airline Guidelienes!"
    // var blurb3 = "Have a worry-free travel experience with luggage that has already been checked"

  return (
    <div className="flex flex-col items-center mt-16 bg">
        <h1 className="text-4xl text-center">
          CAN IT FLY?
        </h1>
        <h2 className="text-4xl text-center">
          ASK PACKMATE AND FIND OUT
        </h2>
        <div>
            <img src={will} alt="Will the Packmate" width="700" height="550" className="center"/>
            <div className="flex flex-col items-center">
            <div>
            <Button
                color="info"
                onClick={function noRefCheck(){}}
                style={{
                marginBottom: '1rem'
                }}
            >
                WHY
            </Button>
            <Collapse horizontal>
                <Alert
                style={{
                    width: '500px'
                }}
                >
                {blurb3}
                </Alert>
            </Collapse>
            </div>
            <div>
            <Button
                color="info"
                onClick={function noRefCheck(){}}
                style={{
                marginBottom: '1rem'
                }}
            >
                CHOOSE
            </Button>
            <Collapse horizontal>
                <Alert
                style={{
                    width: '500px'
                }}
                >
                {blurb2}
                </Alert>
            </Collapse>
            </div>
            <div>
            <Button
                color="info"
                onClick={function noRefCheck(){}}
                style={{
                marginBottom: '1rem'
                }}
            >
                US?
            </Button>
            <Collapse horizontal>
                <Alert
                style={{
                    width: '500px'
                }}
                >
                {blurb3}
                </Alert>
            </Collapse>
            </div>
            </div>
            <Button
                color="info"
                size="lg"
                START A NEW TRIP NOW
            ></Button>
        </div>
    </div>
  );
};

export default Home;
