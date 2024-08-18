import { Card, CardBody } from "@material-tailwind/react";
import { AccordionCustomAnimation } from "./Accordion";

export function SimpleCard() {
  return (
    <Card className="w-50%">
      <CardBody>
        <AccordionCustomAnimation />
      </CardBody>
    </Card>
  );
}
