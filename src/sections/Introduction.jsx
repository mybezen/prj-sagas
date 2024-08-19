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

  const kesehatanFisik =
      'Kondisi yang dimiliki tubuh manusia yang mana setiap organ atau bagian tubuh manusia berfungsi dengan baik. Seseorang yang dikatakan sehat apabila tidak merasakan sakit atau keluhan dan memang secara objektif tidak tampak sakit.',
    aktivitasFisik =
      'Kegiatan tubuh yang menggerakan otot dan menghasilkan energi dan tenaga. Sehingga dengan demikian, asupan yang masuk dalam tubuh tidak mengendap dan menyebabkan obesitas ataupun penyakit berbahaya lainnya.';

  return (
    <div
      className="lg:h-screen w-full flex lg:flex-row flex-col-reverse poppins-regular lg:mt-0 mt-12"
      id="introduction"
    >
      <div className="lg:w-1/2 flex flex-col justify-center items-center">
        <div className="w-9/12 bg-[#A0DEFF] lg:bg-white p-10 lg:mb-20 mb-10">
          <h2 className="lg:text-3xl text-2xl poppins-bold">Kesehatan Fisik</h2>
          <p className="lg:text-xl text-lg">{kesehatanFisik}</p>
        </div>
        <div className=" bg-lime-gr lg:bg-[#A0DEFF] w-9/12 p-10">
          <h2 className="lg:text-3xl text-2xl poppins-bold">Aktivitas Fisik</h2>
          <p className="lg:text-xl text-lg">{aktivitasFisik}</p>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center lg:mb-0 mb-14">
        <div className="poppins-bold w-10/12">
          <span className="block lg:text-8xl text-6xl">“</span>
          <p className="lg:text-4xl text-3xl lg:-mt-10 -mt-8 lg:mb-5 mb-2">
            <span className="text-dark-gr">Health</span> is a state of complete
            physical, mental and social well-being and not merely the absence of
            disease or infirmity.
          </p>
          <span className="text-2xl font-medium">
            World Health Organization
          </span>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
