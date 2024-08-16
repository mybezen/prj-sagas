import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
 
export function AccordionCustomAnimation() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(1)}>Kenapa Sih Harus Sehat Secara Fisik ?</AccordionHeader>
        <AccordionBody>
          Karena ...
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Bagaimana caranya agar tubuh kita selalu sehat secara fisik ?
        </AccordionHeader>
        <AccordionBody>
          Kita Harus ...
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Apa yang bisa kita lakukan agar terhindar dari penyakit fisik ?
        </AccordionHeader>
        <AccordionBody>
          Kita harus ...
        </AccordionBody>
      </Accordion>
    </>
  );
}