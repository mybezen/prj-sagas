import { Card, CardBody } from '@material-tailwind/react';
import {
  AccordionCustomAnimation,
  AccordionPencegahan1,
  AccordionPencegahan2,
  AccordionPencegahan3,
  AccordionPencegahan4,
} from './Accordion';

export function PencegahanCard1() {
  return (
    <Card className="lg:w-11/12 drop-shadow-md w-full">
      <CardBody>
        <AccordionPencegahan1 />
      </CardBody>
    </Card>
  );
}

export function PencegahanCard2() {
  return (
    <Card className="lg:w-11/12 drop-shadow-md w-full">
      <CardBody>
        <AccordionPencegahan2 />
      </CardBody>
    </Card>
  );
}
export function PencegahanCard3() {
  return (
    <Card className="lg:w-11/12 drop-shadow-md w-full">
      <CardBody>
        <AccordionPencegahan3 />
      </CardBody>
    </Card>
  );
}
export function PencegahanCard4() {
  return (
    <Card className="lg:w-11/12 drop-shadow-md w-full">
      <CardBody>
        <AccordionPencegahan4 />
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
