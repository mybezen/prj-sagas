import {
    Card,
    CardBody,

  } from "@material-tailwind/react";
import { AccordionCustomAnimation } from "./Accordion";
   
  export function SimpleCard() {
    return (
      <Card className="mt-6 w-96">
        <CardBody>
          <AccordionCustomAnimation />
          </CardBody>
      </Card>
    );
  }