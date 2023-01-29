// import React, { useState } from 'react';
import React from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap';

import will from '../assets/will_925x782.png'; // gives image path


import '../App.css';


const NewTrip = () => {

  return (
    <div className="bg">
      <h1>TRIP</h1>
      <div className="padded">
      <Form>
        <div>
          <FormGroup>
            <Label for="airlineEntry">
              Which airline will you be flying with?
            </Label>
            <Input
              id="airlineEntry"
              name="airline"
              placeholder="Enter the name of your airline."
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="departureSelect">
              Which airport are you departing from?
            </Label>
            <Input
              id="departureSelect"
              name="departure"
              placeholder="Select the airport you're departing from."
              type="select"
            >
              <option> </option>
              <option>
                George Bush Intercontinental Airport, IAH
              </option>
              <option>
                Dallas Love Field Airport, DAL
              </option>
              <option>
                Austin-Bergstrom International Airport, AUS
              </option>
              <option>
                William P. Hobby Airport, HOU
              </option>
              <option>
                Dalla-Fort Worth International Airport, DFW
              </option>
            </Input>
          </FormGroup>
          <div>
            <iframe title="nearest airport" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.937938986892!2d-97.04252388504003!3d32.899809080935086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2a660d222aa7%3A0x73323f5e067d201c!2sDallas%2FFort%20Worth%20International%20Airport!5e0!3m2!1sen!2sus!4v1675014827346!5m2!1sen!2sus" width="100%" height="60%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <img src={will} alt="Will the Packmate" width="350" height="225" className="center"/>
          </div>
        </div>
        <div className="padded">
          <Button
            href="/packing"
            tag="a">
            Start Packing!
          </Button>
          <Button
            href="/"
            tag="a">
            Back
          </Button>
        </div>
      </Form>
      </div>
      
    </div>
  );
};

export default NewTrip;
