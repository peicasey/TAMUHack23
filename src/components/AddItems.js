import React, { useState } from "react";
import '../App.css';
import { Button,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import will from '../assets/will_925x782.png'; // gives image path


const AddItems = () => {

    const [name, setName] = useState(" ");
    const handleInput = event => {
      setName(event.target.value);  };
  
    const logValue = () => {
      console.log(name);
    };

  return (
        <div className="bg">
            <h1>ITEMS</h1>
            <div className="padded center">
            <Form>
              <FormGroup>
                <Label for="exampleText">
                  Enter your list of items! Example: Water, baseball bat, laptop, etc.
                </Label>
                <Input
                  id="exampleText"
                  onChange={handleInput}
                  name="text"
                  type="textarea"
                />
              </FormGroup>
              <Button
                href="/result"
                tag='a'
                onClick={logValue}
                >
                See results
              </Button>
              <Button
                href="/packing"
                tag='a'>
                Back
              </Button>
            </Form>
            </div>
            
            <img src={will} alt="Will the Packmate" width="700" height="550" className="center"/>
        </div>
        
    );
};

export default AddItems;
