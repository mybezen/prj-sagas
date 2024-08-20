import DiagramPenyebabUtama from '../components/Charts';
import TopBubble from '../assets/top-bubble.svg';
import BottomBubble from '../assets/bottom-bubble.svg';

function Diagram() {
  return (
    <div className="min-h-screen mt-20">
      <img src={TopBubble} alt="" className="absolute w-[200px] -mt-24 -z-10" />
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl lg:text-3xl poppins-bold mb-4">
          Diagram Penyebab Utama
        </h1>
        <p className="text-base lg:text-lg mb-4 px-20 pb-14">
          Menyajikan analisis mendalam mengenai berbagai faktor risiko yang
          paling berkontribusi terhadap timbulnya kondisi medis utama, seperti
          hipertensi, obesitas, dan osteoporosis, dengan tujuan untuk memberikan
          wawasan yang lebih komprehensif bagi upaya pencegahan dan penanganan
          penyakit.
        </p>
      </div>
      <div className="w-full max-w-screen-md mx-auto">
        <DiagramPenyebabUtama />
      </div>
      <img
        src={BottomBubble}
        alt=""
        className="absolute w-[200px] -z-50 right-0 -mt-60"
      />
    </div>
  );
}

export default Diagram;
