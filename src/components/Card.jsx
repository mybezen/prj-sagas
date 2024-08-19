import { Card, CardBody } from '@material-tailwind/react';
import { AccordionCustomAnimation, AccordionPencegahan } from './Accordion';

export function PencegahanCard() {
  return (
    <Card className="w-9/12">
      <CardBody>
        <AccordionPencegahan />
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
