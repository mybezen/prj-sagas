import { useState, useEffect, useRef } from "react";
import { IconButton } from "@material-tailwind/react";
import {
  AmriCard,
  AripCard,
  BintangCard,
  FadhlanCard,
  SultanCard,
} from "./BioCard";

export function CarouselCustomArrows() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardSize, setCardSize] = useState({ width: "300px", height: "350px" });
  const cardRefs = useRef([]);

  const cards = [
    { component: <SultanCard />, name: "SultanCard" },
    { component: <FadhlanCard />, name: "FadhlanCard" },
    { component: <AmriCard />, name: "AmriCard" },
    { component: <AripCard />, name: "AripCard" },
    { component: <BintangCard />, name: "BintangCard" },
  ];

  const updateCardSizes = () => {
    const screenWidth = window.innerWidth;
    let width = "250px"; // default card width
    let height = "300px"; // default card height

    if (screenWidth > 800) {
      width = "300px";
      height = "350px";
    } else if (screenWidth <= 800 && screenWidth > 600) {
      width = "250px";
      height = "300px";
    } else {
      width = "200px";
      height = "250px";
    }

    setCardSize({ width, height });
  };

  useEffect(() => {
    updateCardSizes();
    window.addEventListener("resize", updateCardSizes);

    return () => {
      window.removeEventListener("resize", updateCardSizes);
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (cardRefs.current[activeIndex]) {
      cardRefs.current[activeIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  return (
    <div className="container flex items-center justify-center w-full p-10 bg-gray-100">
      {/* Tombol Panah Kiri */}
      <IconButton
        variant="outlined"
        color="blue-gray"
        size="lg"
        onClick={handlePrev}
        className="mx-2 arrow-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </IconButton>

      {/* Kontainer Kartu */}
      <div className="w-full flex gap-3 overflow-hidden">
        {cards.map((card, index) => (
          <div
            key={card.name}
            ref={(el) => (cardRefs.current[index] = el)}
            id={card.name}
            className={`flex-shrink-0 transition-transform duration-300 transform ${
              index === activeIndex ? "scale-100" : "scale-90 opacity-70"
            }`}
            style={{
              minWidth: cardSize.width,
              maxWidth: cardSize.width,
              height: cardSize.height,
            }}
          >
            {card.component}
          </div>
        ))}
      </div>

      {/* Tombol Panah Kanan */}
      <IconButton
        variant="outlined"
        color="blue-gray"
        size="lg"
        onClick={handleNext}
        className="mx-2 arrow-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </IconButton>

      {/* Menambahkan Media Query untuk Tombol Panah */}
      <style jsx>{`
        @media (max-width: 600px) {
          .arrow-button {
            margin: 0;
            padding: 8px;
          }

          .w-full {
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}
