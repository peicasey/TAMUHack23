// import React, { useState } from 'react';
import React from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap';


const NewTrip = () => {

  return (
    <div>
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
              <option>
                Dalla-Fort Worth International Airport, DFW
              </option>
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
            </Input>
          </FormGroup>
        </div>
        <Button
          href="/packing"
          tag="a">
          Start Packing!
        </Button>
      </Form>
    </div>
  );
};

export default NewTrip;
