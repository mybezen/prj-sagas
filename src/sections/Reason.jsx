import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import CloudIcon from '../assets/infocloud.svg';
import ReasonIcon1 from '../assets/reason-1.svg';
import ReasonIcon2 from '../assets/reason-2.svg';
import ReasonIcon3 from '../assets/reason-3.svg';
import ReasonIcon4 from '../assets/reason-4.svg';
import ReasonIcon5 from '../assets/reason-5.svg';
import ReasonBg from '../assets/reason-bg.svg';
import { Typography } from '@material-tailwind/react';

// Card component
function LifestyleCard1() {
  return (
    <div
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md mt-20 lg:w-5/12 w-full mx-10"
      data-aos="fade-up"
    >
      <a
        href="https://www.cnbcindonesia.com/lifestyle/20240727153806-33-558131/banjir-bocil-bocil-cuci-darah-rscm-ungkap-fakta-sebenarnya"
        target="_blank"
      >
        <div className="flex lg:flex-row flex-col">
          <div
            className="w-24 h-24 relative -top-16 left-0 bg-cover bg-center rounded-2xl mb-4 flex justify-center items-center"
            style={{ backgroundImage: `url(${ReasonBg})` }}
          >
            <img src={ReasonIcon1} className="w-full z-10" alt="" />
          </div>
          <Typography className="flex-1 poppins-bold text-xl lg:pl-10 -mt-16 lg:mt-0">
            'Banjir' Bocil-Bocil Cuci Darah, Ungkap RSCM: Disebabkan Ginjal
            Kronis
          </Typography>
        </div>
        <Typography className="text-gray-700 poppins-regular lg:-mt-10 mt-5">
          Rumah Sakit Cipto Mangunkusumo (RSCM) Jakarta mengungkapkan bahwa saat
          ini terdapat sekitar 60 pasien anak yang menjalani prosedur cuci
          darah, baik melalui hemodialisis maupun Continuous Ambulatory
          Peritoneal Dialysis (CAPD).
        </Typography>
      </a>
    </div>
  );
}

function LifestyleCard2() {
  return (
    <div
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md mt-20 lg:w-5/12 w-full mx-10"
      data-aos="fade-up"
    >
      <a
        href="https://www.antaranews.com/berita/3574299/kemenkes-sebut-pengidap-hipertensi-di-indonesia-capai-341-persen
"
        target="_blank"
        className=''
      >
        <div className="flex lg:flex-row flex-col">
          <div
            className="w-24 h-24 relative -top-16 left-0 bg-cover bg-center rounded-2xl mb-4 flex justify-center items-center"
            style={{ backgroundImage: `url(${ReasonBg})` }}
          >
            <img src={ReasonIcon2} className="w-full z-10" alt="" />
          </div>
          <Typography className="flex-1 poppins-bold text-xl lg:pl-10 -mt-16 lg:mt-0">
            Kemenkes Sebut Pengidap Hipertensi di Indonesia Capai 34,1 persen
          </Typography>
        </div>
        <Typography className="text-gray-700 poppins-regular lg:-mt-10 mt-5">
          Kementerian Kesehatan (Kemenkes) menyebutkan bahwa prevalensi
          hipertensi di Indonesia mencapai 34,1 persen atau lebih dari 70 juta
          penduduk. Hipertensi ini disebabkan oleh pola makan yang tidak sehat,
          seperti konsumsi gula, garam, dan lemak yang berlebihan.
        </Typography>
      </a>
    </div>
  );
}

function LifestyleCard3() {
  return (
    <div
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md mt-20 lg:w-5/12 w-full mx-10"
      data-aos="fade-up"
    >
      <a
        href="https://www.cnnindonesia.com/gaya-hidup/20240301204106-255-1069476/dokter-sebut-1-dari-5-orang-indonesia-mengalami-obesitas
"
        target="_blank"
      >
        <div className="flex lg:flex-row flex-col">
          <div
            className="w-24 h-24 relative -top-16 left-0 bg-cover bg-center rounded-2xl mb-4 flex justify-center items-center"
            style={{ backgroundImage: `url(${ReasonBg})` }}
          >
            <img src={ReasonIcon3} className="w-8/12 z-10" alt="" />
          </div>
          <Typography className="flex-1 poppins-bold text-xl lg:pl-10 -mt-16 lg:mt-0">
            Dokter Sebut 1 Dari 5 Orang Indonesia Mengalami Obesitas
          </Typography>
        </div>
        <Typography className="text-gray-700 poppins-regular lg:-mt-10 mt-5">
          Peningkatan prevalensi obesitas di Indonesia telah meningkat
          signifikan dari 10,5 persen pada tahun 2007 menjadi 21,8 persen pada
          tahun 2018. Penyebab utama obesitas termasuk akses mudah ke makanan
          tidak sehat, seperti makanan cepat saji dan minuman manis yang bisa
          dipesan melalui teknologi.
        </Typography>
      </a>
    </div>
  );
}

function LifestyleCard4() {
  return (
    <div
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md mt-20 lg:w-5/12 w-full mx-10"
      data-aos="fade-up"
    >
      <a
        href="https://health.detik.com/berita-detikhealth/d-7280952/tak-cuma-lansia-osteoporosis-juga-bisa-serang-usia-20-an
"
        target="_blank"
      >
        <div className="flex lg:flex-row flex-col">
          <div
            className="w-24 h-24 relative -top-16 left-0 bg-cover bg-center rounded-2xl mb-4 flex justify-center items-center"
            style={{ backgroundImage: `url(${ReasonBg})` }}
          >
            <img src={ReasonIcon4} className="w-8/12 z-10" alt="" />
          </div>
          <Typography className="flex-1 poppins-bold text-xl lg:pl-10 -mt-16 lg:mt-0">
            Tak Cuma Lansia, Osteoporosis Juga Bisa Serang Usia 20-an
          </Typography>
        </div>
        <Typography className="text-gray-700 poppins-regular lg:-mt-10 mt-5">
          Penyebab utama osteoporosis di usia muda termasuk penyakit tertentu
          seperti hipertiroidisme, yang sering kali memerlukan penggunaan
          obat-obatan seperti steroid. Obat-obatan ini dapat mempercepat
          pengeroposan tulang.
        </Typography>
      </a>
    </div>
  );
}

function LifestyleCard5() {
  return (
    <div
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md mt-20 w-full lg:mx-16 mx-10"
      data-aos="fade-up"
    >
      <a
        href=" https://rs.ui.ac.id/umum/berita-artikel/artikel-populer/waspada-stroke-di-usia-muda"
        target="_blank"
      >
        <div className="flex flex-col">
          <div
            className="w-24 h-24 lg:m-auto lg:static bg-cover bg-center relative lg:-mt-16 -top-16 left-0 rounded-2xl mb-4 flex justify-center items-center"
            style={{ backgroundImage: `url(${ReasonBg})` }}
          >
            <img src={ReasonIcon5} className="w-8/12 z-10" alt="" />
          </div>
          <Typography className="flex-1 poppins-bold text-xl text-center -mt-16 lg:mt-8">
            Waspada Stroke di Usia Muda
          </Typography>
        </div>
        <Typography className="text-gray-700 poppins-regular mt-5 lg:mb-5 lg:mx-10 text-center">
          stroke tidak hanya menyerang lansia tetapi juga usia muda, terutama
          karena perubahan gaya hidup yang buruk seperti pola makan tidak sehat,
          kurang olahraga, dan konsumsi alkohol. Selain itu, faktor risiko lain
          termasuk kelainan pembekuan darah, kelainan jantung, kelainan pembuluh
          darah, migrain, kehamilan, dan penggunaan obat-obatan terlarang.
          Genetik juga dapat berperan dalam meningkatkan risiko stroke.
        </Typography>
      </a>
    </div>
  );
}

function Reason() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <img
        className="w-full transform scale-y-[-1]"
        src={CloudIcon}
        alt="Cloud Top"
      />

      <div className="w-full pb-32 lg:rounded-b-[100px] rounded-b-[50px] -mt-1 min-h-screen bg-gradient-to-b from-dr-bl to-sky-bl py-16">
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="poppins-bold text-white text-4xl">Kasus-Kasus</h1>
          <p className="text-white poppins-regular text-xl">
            Kasus-kasus yang disebabkan dari kurangnya aktivitas fisik.
          </p>
        </div>

        <div className="flex justify-evenly flex-wrap">
          <LifestyleCard1 />
          <LifestyleCard2 />
          <LifestyleCard3 />
          <LifestyleCard4 />
          <LifestyleCard5 />
        </div>
      </div>
    </div>
  );
}

export default Reason;
