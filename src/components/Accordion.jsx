import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

function AccordionCustomAnimation() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Mengapa kita harus sehat secara fisik?
        </AccordionHeader>
        <AccordionBody>
          <p className="text-base poppins-semibold">
            karena usia 25—30 tahun merupakan fase berhentinya peningkatan
            kekuatan otot dan menjelang 30 tahun ke atas kekuatan otot pun
            cenderung menurun, maka dari itu diperlukan aktivitas fisik untuk
            mempertahankannya.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Bagaimana cara menjaga kesehatan fisik di tengah kesibukan
          sehari-hari?
        </AccordionHeader>
        <AccordionBody>
          <p className="text-base poppins-semibold">Yaitu dengan cara:</p>
          <ul className="text-base poppins-semibold">
            <li>1. Menjaga pola makan</li>
            <li>2. Melakukan aktivitas fisik</li>
            <li>3. Istirahat yang cukup</li>
            <li>4. Periksa kesehatan secara rutin</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Bagaimana cara mengatur pola latihan fisik agar tidak berlebihan dan
          tetap aman?
        </AccordionHeader>
        <AccordionBody>
          <p className="text-base poppins-semibold">
            Mulailah latihan dengan intensitas ringan dan tingkatkan perlahan.
            Dengarkan tubuhmu, beristirahat jika lelah, dan jadwalkan hari
            istirahat. Lakukan pemanasan, pendinginan, dan variasikan latihan
            untuk mencegah cedera. Tetapkan tujuan realistis dan konsultasikan
            dengan ahli jika perlu.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          Bagaimana pengaruh pola makan terhadap kesehatan fisik secara
          keseluruhan?
        </AccordionHeader>
        <AccordionBody>
          <p className="text-base poppins-semibold">
            Pola makan sehat mendukung energi, fungsi organ, dan mencegah
            penyakit. Pola makan buruk meningkatkan risiko masalah kesehatan
            seperti obesitas dan penyakit kronis. Jadi, makan seimbang dan
            bergizi penting untuk kesehatan tubuh secara keseluruhan.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          Apa dampak negatif dari gaya hidup sedentari (kurang gerak)?
        </AccordionHeader>
        <AccordionBody>
          <p className="text-base poppins-semibold">
            Dampak negatif gaya hidup sedentari meliputi risiko penyakit jantung
            naik, obesitas, diabetes, osteoporosis, otot lemah, postur buruk,
            metabolisme lambat, risiko kanker tinggi, fungsi kognitif turun,
            masalah mental. Intinya, kurang gerak merugikan kesehatan
            fisik-mental.
          </p>
        </AccordionBody>
      </Accordion>
    </>
  );
}

function AccordionPencegahan1() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(1)}>
        Aktivitas fisik ringan
        </AccordionHeader>
        <AccordionBody>
          <p className="text-base poppins-semibold">
          Berjalan santai di rumah, kantor, atau pusat perbelanjaan, duduk bekerja di depan komputer, membaca, menulis, menyetir, mengoperasikan mesin dengan posisi duduk atau berdiri, berdiri melakukan pekerjaan rumah tangga ringan seperti mencuci piring, setrika, memasak, menyapu, mengepel lantai, menjahit
          </p>
        </AccordionBody>
      </Accordion>
    </>
  );
}

function AccordionPencegahan2() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
      <AccordionHeader onClick={() => handleOpen(1)}>
      Olahraga ringan
      </AccordionHeader>
      <AccordionBody>
        <p className="text-base poppins-semibold">
          Jalan cepat di sekitar halaman/di dalam rumah selama 30-45 menit/hari, naik turun tangga di rumah selama 10-15 menit, bermain hula hoop, wall push up, squat, jumping jacks 
        </p>
      </AccordionBody>
    </Accordion>
  );
}

function AccordionPencegahan3() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
      <AccordionHeader onClick={() => handleOpen(1)}>
        Menjaga Pola Makan
      </AccordionHeader>
      <AccordionBody>
        <p className="text-base poppins-semibold">
        Untuk menjaga pola makan sehat, rencanakan menu mingguan, pilih makanan bergizi, dan perhatikan ukuran porsi. Minum cukup air dan makan secara teratur, sesuai sinyal tubuh. Nikmati makanan dengan tenang, pilih camilan sehat, dan gabungkan dengan aktivitas fisik. Sesekali, beri kelonggaran pada diri sendiri untuk membuat pola makan lebih mudah dipertahankan.
        </p>
      </AccordionBody>
    </Accordion>
  );
}

function AccordionPencegahan4() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(1)}>
        Menjaga Pola Tidur
        </AccordionHeader>
        <AccordionBody>
          <p className="text-base poppins-semibold">
          Untuk menjaga pola tidur yang baik, tidurlah dan bangun pada waktu yang sama setiap hari, buat rutinitas malam yang menenangkan, dan hindari layar elektronik sebelum tidur. Atur kamar tidur agar nyaman, batasi kafein dan alkohol, dan lakukan aktivitas fisik secara teratur. Kelola stres dan hindari makan berat sebelum tidur.
          </p>
        </AccordionBody>
      </Accordion>
    </>
  );
}


export { AccordionCustomAnimation, AccordionPencegahan1, AccordionPencegahan2, AccordionPencegahan3, AccordionPencegahan4 };
