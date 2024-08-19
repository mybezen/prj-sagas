import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import 'aos/dist/aos.css';
import AOS from 'aos';
import WaveIcon from '../assets/WaveTop.svg';

//Import custom icon
import ObesityIcon from '../assets/obesit.png';
import StrokeIcon from '../assets/stroke.png';
import HypertensionIcon from '../assets/hypertension.png';
import OsteoIcon from '../assets/osteoporosis.png';
import KidneyFailureIcon from '../assets/kidney.jpg';

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    AOS.init({
      duration: 800, // Durasi animasi dalam ms
      easing: 'ease-in-out', // Opsi easing
      once: true, // Mengaktifkan animasi hanya sekali saat pertama kali elemen muncul
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    AOS.refresh(); // Memperbarui AOS setiap kali tab beruba
  };

  return (
    <div>
        <img className='w-full' src={WaveIcon}></img>
    <div className="flex flex-col items-center pt-24 pb-32  bg-sky-bl">
      <h1 className="text-4xl poppins-bold pb-1">
        Kenali Penyakit Tidak Menular
      </h1>
      <p className="text-2xl poppins-regular mb-3">
        Akibat kurangnya aktivitas fisik
      </p>
      <div className="container pt-10">
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon label tabs example"
            TabIndicatorProps={{
              style: { backgroundColor: 'transparent' },
            }}
            variant="fullWidth"
          >
            <Tab
              id="0"
              icon={
                <img
                  src={ObesityIcon}
                  alt="Obesitas Icon"
                  style={{ width: '40px', height: '40px' }}
                />
              }
              label="Obesitas"
              sx={{
                bgcolor: value === 0 ? '#ffffff' : '#F1F1F1',
                color: 'black',
                borderRadius: '8px',
                fontWeight: 'bold',
                minWidth: '100px',
                margin: '0 4px',
              }}
            />
            <Tab
              id="1"
              icon={
                <img
                  src={StrokeIcon}
                  alt="Stroke Icon"
                  style={{ width: '40px', height: '40px' }}
                />
              }
              label="Stroke"
              sx={{
                bgcolor: value === 1 ? '#ffffff' : '#F1F1F1',
                color: 'black',
                borderRadius: '8px',
                fontWeight: 'bold',
                minWidth: '100px',
                margin: '0 4px',
              }}
            />
            <Tab
              id="2"
              icon={
                <img
                  src={HypertensionIcon}
                  alt="Hipertensi Icon"
                  style={{ width: '40px', height: '40px' }}
                />
              }
              label="Hipertensi"
              sx={{
                bgcolor: value === 2 ? '#ffffff' : '#F1F1F1',
                color: 'black',
                borderRadius: '8px',
                fontWeight: 'bold',
                minWidth: '100px',
                margin: '0 4px',
              }}
            />
            <Tab
              id="3"
              icon={
                <img
                  src={KidneyFailureIcon}
                  alt="Gagal Ginjal Icon"
                  style={{ width: '40px', height: '40px' }}
                />
              }
              label="Gagal Ginjal"
              sx={{
                bgcolor: value === 3 ? '#ffffff' : '#F1F1F1',
                color: 'black',
                borderRadius: '8px',
                fontWeight: 'bold',
                minWidth: '100px',
                margin: '0 4px',
              }}
            />
            <Tab
              id="4"
              icon={
                <img
                  src={OsteoIcon}
                  alt="Osteoporosis Icon"
                  style={{ width: '40px', height: '40px' }}
                />
              }
              label="Osteoporosis"
              sx={{
                bgcolor: value === 4 ? '#ffffff' : '#F1F1F1',
                color: 'black',
                borderRadius: '8px',
                fontWeight: 'bold',
                minWidth: '100px',
                margin: '0 4px',
                fontSize: '12px',
              }}
            />
          </Tabs>

          <Box
            sx={{
              padding: '48px',
              marginTop: '20px',
              bgcolor: '#ffffff',
              borderRadius: '8px',
              minHeight: '200px',
              width: '100%',
            }}
          >
            {value === 0 && (
              /* Obesitas */
              <Box
                sx={{ alignItems: 'center' }}
                data-aos="zoom-in"
                className="flex lg:flex-row flex-col-reverse"
              >
                {/* Text Column */}
                <Box sx={{ flex: 1 }} className="lg:pl-10">
                  <h2 className="poppins-bold lg:text-4xl text-3xl mt-10 text-dark-gr mb-3">
                    Obesitas
                  </h2>
                  <p className="poppins-regular text-xl">
                    Obesitas adalah kondisi medis berupa berat badan di atas
                    normal karena penumpukan lemak berlebih. Hal tersebut
                    terjadi karena asupan kalori lebih tinggi dibandingkan
                    dengan kalori yang digunakan. Apabila kondisi ini terjadi
                    dalam kurun waktu lama, besar kemungkinan berat badan akan
                    terus bertambah.
                  </p>
                </Box>
                {/* Image Column */}
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={ObesityIcon}
                    alt="Obesitas Image"
                    style={{
                      maxWidth: '300px',
                      borderRadius: '8px',
                    }}
                    className="lg:w-full w-8/12"
                  />
                </Box>
              </Box>
            )}
            {value === 1 && (
              /* Stroke */
              <Box
                sx={{ alignItems: 'center' }}
                data-aos="zoom-in"
                className="flex lg:flex-row flex-col-reverse"
              >
                {/* Text Column */}
                <Box sx={{ flex: 1 }} className="lg:pl-10">
                  <h2 className="poppins-bold lg:text-4xl text-3xl mt-10 text-dark-gr mb-3">
                    Stroke
                  </h2>
                  <p className="poppins-regular text-xl">
                    Transient Ischemic Attack (TIA) atau lebih dikenal dengan
                    stroke ringan adalah serangan yang muncul secara tiba-tiba
                    berupa gejala stroke, tetapi sifatnya sementara atau dalam
                    waktu singkat. Kebanyakan stroke ringan adalah kondisi yang
                    akan bertahan selama beberapa menit hingga jam, kemudian
                    mereda dalam waktu 24 jam.
                  </p>
                </Box>
                {/* Image Column */}
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={StrokeIcon}
                    alt="Stroke Image"
                    style={{
                      maxWidth: '300px',
                      borderRadius: '8px',
                    }}
                    className="lg:w-full w-8/12"
                  />
                </Box>
              </Box>
            )}
            {value === 2 && (
              /* Hipertensi */
              <Box
                sx={{ alignItems: 'center' }}
                data-aos="zoom-in"
                className="flex lg:flex-row flex-col-reverse"
              >
                {/* Text Column */}
                <Box sx={{ flex: 1 }} className="lg:pl-10">
                  <h2 className="poppins-bold lg:text-4xl text-3xl mt-10 text-dark-gr mb-3">
                    Hipertensi
                  </h2>
                  <p className="poppins-regular text-xl">
                    Hipertensi adalah istilah medis ketika kondisi tekanan darah
                    pada arteri meningkat melebihi batas normal. Tekanan darah
                    terbagi menjadi dua bagian, yaitu sistolik dan diastolik.
                    Hipertensi ditegakkan saat kondisi tekanan sistolik melebihi
                    atau sama dengan 140 mmHg dan diastolik melebihi atau sama
                    dengan 90 mmHg.
                  </p>
                </Box>
                {/* Image Column */}
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={HypertensionIcon}
                    alt="Hipertensi Image"
                    style={{
                      maxWidth: '300px',
                      borderRadius: '8px',
                    }}
                    className="lg:w-full w-8/12"
                  />
                </Box>
              </Box>
            )}
            {value === 3 && (
              <Box
                sx={{ alignItems: 'center' }}
                data-aos="zoom-in"
                className="flex lg:flex-row flex-col-reverse"
              >
                {/* Text Column */}
                <Box sx={{ flex: 1 }} className="lg:pl-10">
                  <h2 className="poppins-bold lg:text-4xl text-3xl mt-10 text-dark-gr mb-3">
                    Gagal Ginjal
                  </h2>
                  <p className="poppins-regular text-xl">
                    Gagal ginjal adalah suatu kondisi penurunan fungsi ginjal
                    dalam menyaring limbah sisa metabolisme tubuh dari dalam
                    darah dan membuangnya melalui urin. Kondisi tersebut
                    menyebabkan kadar racun dan cairan berbahaya akan mengendap
                    dalam tubuh dan dapat berakibat fatal apabila tidak
                    ditangani.
                  </p>
                </Box>
                {/* Image Column */}
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={KidneyFailureIcon}
                    alt="Hipertensi Image"
                    style={{
                      maxWidth: '300px',
                      borderRadius: '8px',
                    }}
                    className="lg:w-full w-8/12"
                  />
                </Box>
              </Box>
            )}
            {value === 4 && (
              <Box
                sx={{ alignItems: 'center' }}
                data-aos="zoom-in"
                className="flex lg:flex-row flex-col-reverse"
              >
                {/* Text Column */}
                <Box sx={{ flex: 1 }} className="lg:pl-10">
                  <h2 className="poppins-bold lg:text-4xl text-3xl mt-10 text-dark-gr mb-3">
                    Osteoporosis
                  </h2>
                  <p className="poppins-regular text-xl">
                    Osteoporosis adalah kondisi ketika kepadatan tulang
                    berkurang sehingga tulang menjadi keropos dan mudah patah.
                    Osteoporosis jarang menimbulkan gejala dan biasanya baru
                    diketahui ketika penderitanya jatuh atau mengalami cedera
                    yang menyebabkan patah tulang.
                  </p>
                </Box>
                {/* Image Column */}
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={OsteoIcon}
                    alt="Osteoporosis Image"
                    style={{
                      maxWidth: '300px',
                      borderRadius: '8px',
                    }}
                    className="lg:w-full w-8/12"
                  />
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </div>
    </div>
    </div>
  );
}
