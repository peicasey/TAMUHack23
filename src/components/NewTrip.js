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
              type="select"
            >
              <option>
                Dalla-Fort Worth International Airport, DFW
              </option>
              <option>
                2
              </option>
              <option>
                3
              </option>
              <option>
                4
              </option>
              <option>
                5
              </option>
            </Input>
          </FormGroup>
        </div>
        <Button>
          Start Packing!
        </Button>
      </Form>
    </div>
  );
};

export default NewTrip;
