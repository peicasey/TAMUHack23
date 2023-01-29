// import React, { useState } from 'react';
import React from 'react';

import NewTrip from "./components/NewTrip";
import { Button } from 'reactstrap';

import will from '../assets/will_925x782.png'; // gives image path

const Home = () => {

  return (
    <div className="flex flex-col items-center mt-16">
        <h1 className="text-4xl text-center">
          CAN IT FLY?
        </h1>
        <h2 className="text-4xl text-center">
          ASK PACKMATE AND FIND OUT
        </h2>
        <div className="center">
        <NewTrip />
        <img src={will} alt="Will the Packmate" width="700" height="550"/>
        <Button outline>
          Add Bags
        </Button>
        </div>
      </div>
  );
};

export default Home;