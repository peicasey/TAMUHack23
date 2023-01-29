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
          <div className="center">
            <div>
              <iframe width="500" height="400" frameborder="0" src="https://www.bing.com/maps/embed?h=400&w=500&cp=30.607757329913227~-96.33602414901912&lvl=11.321041527025999&typ=d&sty=r&src=SHELL&FORM=MBEDV8" scrolling="no">
              </iframe>
              <div style="white-space: nowrap; text-align: center; width: 500px; padding: 6px 0;">
                  <a id="largeMapLink" target="_blank" href="https://www.bing.com/maps?cp=30.607757329913227~-96.33602414901912&amp;sty=r&amp;lvl=11.321041527025999&amp;FORM=MBEDLD">View Larger Map</a> &nbsp; | &nbsp;
                  <a id="dirMapLink" target="_blank" href="https://www.bing.com/maps/directions?cp=30.607757329913227~-96.33602414901912&amp;sty=r&amp;lvl=11.321041527025999&amp;rtp=~pos.30.607757329913227_-96.33602414901912____&amp;FORM=MBEDLD">Get Directions</a>
              </div>
            </div>
          </div>
        </div>
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
      </Form>
      <img src={will} alt="Will the Packmate" width="700" height="550" className="center"/>
    </div>
  );
};

export default NewTrip;
