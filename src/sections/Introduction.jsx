import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Introduction() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
    AOS.refresh();
  }, []);

  return (
    <div
      className="lg:h-screen w-full flex lg:flex-row flex-col-reverse poppins-regular lg:mt-0 mt-12"
      id="introduction"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine"
    >
      <div className="lg:w-1/2 flex flex-col justify-center items-center">
        <div className="w-9/12 lg:bg-lune-blue lg:hover:bg-blue-500 duration-300 p-10 lg:mb-20 mb-10 lg:border-none border-4 border-gray-200">
          <h2 className="lg:text-3xl text-2xl poppins-bold">Kesehatan Fisik</h2>
          <p className="lg:text-xl text-lg">
            Kondisi yang dimiliki tubuh manusia yang mana setiap organ atau
            bagian tubuh manusia berfungsi dengan baik. Seseorang yang dikatakan
            sehat apabila tidak merasakan sakit atau keluhan dan memang secara
            objektif tidak tampak sakit.
          </p>
        </div>
        <div className="border-4 lg:border-none border-gray-200 w-9/12 p-10">
          <h2 className="lg:text-3xl text-2xl poppins-bold">Aktivitas Fisik</h2>
          <p className="lg:text-xl text-lg">
            Kegiatan tubuh yang menggerakan otot dan menghasilkan energi dan
            tenaga. Sehingga dengan demikian, asupan yang masuk dalam tubuh
            tidak mengendap dan menyebabkan obesitas ataupun penyakit berbahaya
            lainnya.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center lg:mb-0 mb-14">
        <div className="poppins-bold w-10/12">
          <span className="block lg:text-7xl text-5xl">“</span>
          <p className="lg:text-3xl text-2xl lg:-mt-8 -mt-6 lg:mb-5 mb-2">
            <span className="text-gr-blue">Health</span> is a state of complete
            physical, mental and social well-being and not merely the absence of
            disease or infirmity.
          </p>
          <span className="lg:text-2xl text-xl font-medium">
            World Health Organization
          </span>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
