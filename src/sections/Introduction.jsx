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

  const sehat =
      'Health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity.',
    kesehatanFisik =
      'Kesehatan fisik adalah kondisi yang dimiliki tubuh manusia yang mana setiap organ atau bagian tubuh manusia berfungsi dengan baik. Seseorang yang dikatakan sehat apabila tidak merasakan sakit atau keluhan dan memang secara objektif tidak tampak sakit.',
    aktifitasFisik =
      'aktivitas fisik adalah kegiatan tubuh yang menggerakan otot dan menghasilkan energi dan tenaga. Sehingga dengan demikian, asupan yang masuk dalam tubuh tidak mengendap dan menyebabkan obesitas ataupun penyakit berbahaya lainnya.';
}

export default Introduction;
