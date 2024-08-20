import { CarouselCustomArrows } from "../components/CardCarousel";
import TogetherIcon from '../assets/TogethIcon.svg';

function OurTeam() {
  return (
    <div className="relative flex flex-col items-center mt-4"
          style={{
            backgroundImage: `url(${TogetherIcon})`, // Mengatur gambar latar belakang
        backgroundSize: 'cover', // Mengatur gambar agar menutupi seluruh div
        backgroundPosition: 'center', // Menempatkan gambar di tengah div
        backgroundRepeat: 'no-repeat', // Mencegah pengulangan gambar
        width: '100%', // Menyesuaikan lebar div
        height: '100vh' // Menyesuaikan tinggi div dengan tinggi viewport
          }}
    >
      <h1 className="pt-5 text-2xl poppins-bold">Our Team</h1>

      {/* Container Carousel dengan Padding */}
      <div className="flex justify-center w-full pt-[7rem] ">
        <CarouselCustomArrows />
      </div>
    </div>
  );
}

export default OurTeam;
