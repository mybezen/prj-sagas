import { Card, CardBody } from '@material-tailwind/react';
import { AccordionCustomAnimation } from './Accordion';

export function SimpleCard() {
  return (
    <Card className="w-9/12">
      <CardBody>
        <AccordionCustomAnimation />
      </CardBody>
    </Card>
  );
}
