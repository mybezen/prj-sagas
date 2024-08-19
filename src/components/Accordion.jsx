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

function AccordionPencegahan() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(1)}>
        Rutin Berolahraga
        </AccordionHeader>
        <AccordionBody>
          <p className="text-base poppins-semibold">
          <ul className="text-base poppins-semibold">
            <li>1. Melakukan olahraga secara teratur membantu menjaga berat badan ideal, mengurangi risiko obesitas, hipertensi, diabetes, stroke, dan osteoporosis.</li>
            <li>2. Pilih aktivitas yang menyenangkan dan sesuai dengan kondisi fisik Anda, seperti berjalan, berenang, bersepeda, atau yoga.</li>
          </ul>
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        Mengonsumsi Makanan Sehat dan Bergizi
        </AccordionHeader>
        <AccordionBody>
          <p className="text-base poppins-semibold">Yaitu dengan cara:</p>
          <ul className="text-base poppins-semibold">
            <li>1. Makan makanan dengan gizi seimbang, kaya serat, buah-buahan, sayuran, dan rendah lemak serta gula, membantu mencegah obesitas, diabetes, hipertensi, dan osteoporosis.</li>
            <li>2. Batasi konsumsi makanan tinggi natrium, lemak jenuh, dan kolesterol, serta hindari konsumsi gula berlebih.</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        Menjaga Berat Badan Ideal
        </AccordionHeader>
        <AccordionBody>
          <p className="text-base poppins-semibold">
          <ul className="text-base poppins-semibold">
            <li>1. Mengontrol berat badan dapat mengurangi risiko obesitas, hipertensi, diabetes, dan masalah jantung.</li>
            <li>2. Diet sehat dan olahraga rutin adalah kunci untuk menjaga berat badan tetap ideal.</li>
          </ul>
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(4)}>
        Menghindari Kebiasaan Buruk
        </AccordionHeader>
        <AccordionBody>
          <p className="text-base poppins-semibold">
          <ul className="text-base poppins-semibold">
            <li>1. Berhenti merokok dan mengurangi konsumsi alkohol dapat mencegah berbagai penyakit, termasuk stroke, hipertensi, dan kanker.</li>
            <li>2. Hindari penggunaan obat tanpa resep dokter, terutama obat kortikosteroid, yang dapat mempengaruhi kesehatan tulang.</li>
          </ul>
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(5)}>
        Tidur yang Cukup dan Berkualitas
        </AccordionHeader>
        <AccordionBody>
          <p className="text-base poppins-semibold">
          <ul className="text-base poppins-semibold">
            <li>1. Tidur yang cukup mendukung kesehatan fisik dan mental, serta membantu dalam pengaturan berat badan, metabolisme, dan pemulihan tubuh.</li>
            <li>2. Cobalah untuk mendapatkan 7-8 jam tidur per malam dan ciptakan rutinitas tidur yang baik.</li>
          </ul>
          </p>
        </AccordionBody>
      </Accordion>
    </>
  );
}

export {AccordionCustomAnimation, AccordionPencegahan};