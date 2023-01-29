import React, { useState } from "react";

// import CollapseTxt from "./CollapseTxt";
import { Button,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';
import will from '../assets/will_925x782.png'; // gives image path

import '../App.css';

const Home = () => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
        setOpen();
        } else {
        setOpen(id);
        }
    };

  return (
    <div className="flex flex-col items-center mt-16 bg">
        <h1 className="text-4xl text-center">
          CAN IT FLY?
        </h1>
        <h2 className="text-4xl text-center">
          ASK PACKMATE AND FIND OUT
        </h2>
        <div className="padded">
            <img src={will} alt="Will the Packmate" width="700" height="550" className="center"/>
            <div className="flex flex-col items-center padded">
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                <AccordionHeader targetId="1">How to Use PackMate</AccordionHeader>
                <AccordionBody accordionId="1">
                    Select Start a New Trip Now to fill in your flight information, destination, 
                    baggage dimensions, and let PackMate know what items you hope to bring! 
                    PackMate will let you know what the relevant regulations are.
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="2">What if my item does not show up?</AccordionHeader>
                <AccordionBody accordionId="2">
                    If PackMate does not recognize your item, it will suggest possible 
                    matches until you find what you're looking for!
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="3">Don't see your Airport/Airline?</AccordionHeader>
                <AccordionBody accordionId="3">
                    Suggest a new airport/airline to PackMate, and our devs will quickly add
                    it to our roster! Thank you for using PackMate!
                </AccordionBody>
                </AccordionItem>
            </Accordion>
            </div>
            <div className="padded">
                <Button
                    color="info"
                    size="lg"
                    href="/newtrip"
                >START A NEW TRIP NOW</Button>
            </div>
        </div>
    </div>
  );
};

export default Home;
