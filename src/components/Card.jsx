import { Card, CardBody } from '@material-tailwind/react';
import { AccordionCustomAnimation, AccordionPencegahan1, AccordionPencegahan2 } from './Accordion';

export function PencegahanCard1() {
  return (
    <Card className="w-9/12">
      <CardBody>
        <AccordionPencegahan1/>
      </CardBody>
    </Card>
  );
}

export function PencegahanCard2() {
  return (
    <Card className="w-9/12">
      <CardBody>
        <AccordionPencegahan2 />
      </CardBody>
    </Card>
  );
}

export function StudCard() {
  return (
    <Card className="w-9/12">
      <CardBody>
        <AccordionCustomAnimation />
      </CardBody>
    </Card>
  );
}
