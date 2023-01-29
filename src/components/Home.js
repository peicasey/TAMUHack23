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
        <div>
            <img src={will} alt="Will the Packmate" width="700" height="550" className="center"/>
            <div className="flex flex-col items-center">
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
                <AccordionBody accordionId="1">
                    <strong>This is the first item&#39;s accordion body.</strong>
                    You can modify any of this with custom CSS or overriding our default
                    variables. It&#39;s also worth noting that just about any HTML can
                    go within the <code>.accordion-body</code>, though the transition
                    does limit overflow.
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
                <AccordionBody accordionId="2">
                    <strong>This is the second item&#39;s accordion body.</strong>
                    You can modify any of this with custom CSS or overriding our default
                    variables. It&#39;s also worth noting that just about any HTML can
                    go within the <code>.accordion-body</code>, though the transition
                    does limit overflow.
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
                <AccordionBody accordionId="3">
                    <strong>This is the third item&#39;s accordion body.</strong>
                    You can modify any of this with custom CSS or overriding our default
                    variables. It&#39;s also worth noting that just about any HTML can
                    go within the <code>.accordion-body</code>, though the transition
                    does limit overflow.
                </AccordionBody>
                </AccordionItem>
            </Accordion>
            </div>
            <div className="center">
            <Button
                color="info"
                size="lg"
                
            >START A NEW TRIP NOW</Button>
            </div>
        </div>
    </div>
  );
};

export default Home;
