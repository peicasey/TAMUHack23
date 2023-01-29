// import React, { useState } from 'react';
import React, { useState } from "react";
import { 
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ButtonGroup

} from 'reactstrap'
import '../App.css';

const AddItem = () => {

  const [rSelected, setRSelected] = useState(null);

  return (
    <div className="bg">
      <h1>BAG</h1>
      <div className="padded">
      <Form>
        <FormGroup>
          <Label for="length">
            Length
          </Label>
          <Input
            id="length"
            name="length"
            placeholder="Enter the length of this bag (inches)"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="width">
            Width
          </Label>
          <Input
            id="width"
            name="width"
            placeholder="Enter the width of this bag (inches)"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="height">
            Height
          </Label>
          <Input
            id="height"
            name="height"
            placeholder="Enter the height of this bag (inches)"
            type="text"
          />
        </FormGroup>
        <ButtonGroup>
          <Button
            color="info"
            outline
            onClick={() => setRSelected("Checked")}
            active={rSelected === 1}
          >
            Checked
          </Button>
          <Button
            color="info"
            outline
            onClick={() => setRSelected("Carry-on")}
            active={rSelected === 2}
          >
            Carry-on
          </Button>
        </ButtonGroup>
        <p>Selected: {rSelected}</p>
        <Button
          href="/items"
          tag='a'>
          Add items to this bag!
        </Button>
      </Form>
      <Button
        href="/newtrip"
        tag="a">
        Back
      </Button>
      </div>
    </div>
  );
};

export default AddItem;
