import { CarouselCustomArrows } from '../components/CardCarousel';
import TogetherIcon from '../assets/TogethIcon.svg';

function OurTeam() {
  return (
    <div
      className="flex flex-col items-center mt-4"
      style={{
        backgroundImage: `url(${TogetherIcon})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
      }}
    >
      <h1 className="pt-5 text-5xl poppins-bold mt-20 text-zinc-800">
        Our Team
      </h1>
      <div className="flex justify-center w-full pt-[7rem] h-screen -mt-24">
        <CarouselCustomArrows />
      </div>
    </div>
  );
}

export default OurTeam;
