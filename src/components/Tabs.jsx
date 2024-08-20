import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import 'aos/dist/aos.css';
import AOS from 'aos';
import WaveIcon from '../assets/WaveTop.svg';

// Import custom icons
import ObesityIcon from '../assets/obesit.png';
import StrokeIcon from '../assets/stroke.png';
import HypertensionIcon from '../assets/hypertension.png';
import OsteoIcon from '../assets/osteoporosis.png';
import KidneyFailureIcon from '../assets/kidney.jpg';

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    AOS.init({
      duration: 1200, // Durasi animasi dalam ms
      easing: 'ease-in-out', // Opsi easing
      once: true, // Mengaktifkan animasi hanya sekali saat pertama kali elemen muncul
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    AOS.refresh(); // Memperbarui AOS setiap kali tab berubah
  };

  return (
    <div className="lg:-mt-36">
      <img
        className="w-full -mb-1 lg:mb-0"
        data-aos="fade-up"
        src={WaveIcon}
        alt="Wave Icon"
      />
      <div className="flex flex-col items-center px-5 lg:pt-24 lg:pb-32 py-10 lg:py-24 pb-16 bg-gradient-to-b from-sky-bl to-dr-bl">
        <h1 className="text-2xl lg:text-4xl font-bold poppins-bold pb-1">
          Kenali Penyakit Tidak Menular
        </h1>
        <p className="text-xl lg:text-2xl font-regular poppins-regular mb-3">
          Akibat kurangnya aktivitas fisik
        </p>
        <div className="pt-10 w-full">
          <Box>
            <div className="w-full">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="icon label tabs example"
                TabIndicatorProps={{
                  style: { backgroundColor: 'transparent' },
                }}
                variant="scrollable"
                scrollButtons="auto"
                className="w-full lg:flex"
              >
                {/* Tabs */}
                <Tab
                  icon={
                    <img
                      src={ObesityIcon}
                      alt="Obesitas Icon"
                      className="w-10 h-10"
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
                  className="lg:flex-1"
                />
                <Tab
                  icon={
                    <img
                      src={StrokeIcon}
                      alt="Stroke Icon"
                      className="w-10 h-10"
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
                  className="lg:flex-1"
                />
                <Tab
                  icon={
                    <img
                      src={HypertensionIcon}
                      alt="Hipertensi Icon"
                      className="w-10 h-10"
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
                  className="lg:flex-1"
                />
                <Tab
                  icon={
                    <img
                      src={KidneyFailureIcon}
                      alt="Gagal Ginjal Icon"
                      className="w-10 h-10"
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
                  className="lg:flex-1"
                />
                <Tab
                  icon={
                    <img
                      src={OsteoIcon}
                      alt="Osteoporosis Icon"
                      className="w-10 h-10"
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
                  className="lg:flex-1"
                />
              </Tabs>
            </div>

            {/* Content Sections */}
            <Box
              sx={{
                padding: '24px',
                marginTop: '20px',
                bgcolor: '#ffffff',
                borderRadius: '8px',
                minHeight: '200px',
                width: '100%',
              }}
              className="text-dark-gr text-center lg:text-left drop-shadow-2xl"
            >
              {value === 0 && (
                <Box
                  data-aos="zoom-in"
                  className="flex flex-col-reverse lg:flex-row items-center lg:py-16 py-8"
                >
                  <Box className="flex-1 lg:pl-24 lg:-mt-12">
                    <h2 className="poppins-bold text-3xl lg:text-4xl mt-10 lg:mt-0 mb-3">
                      Obesitas
                    </h2>
                    <p className="poppins-regular text-xl text-black">
                      Obesitas adalah kondisi medis berupa berat badan di atas
                      normal karena penumpukan lemak berlebih. Hal tersebut
                      terjadi karena asupan kalori lebih tinggi dibandingkan
                      dengan kalori yang digunakan. Apabila kondisi ini terjadi
                      dalam kurun waktu lama, besar kemungkinan berat badan akan
                      terus bertambah.
                    </p>
                  </Box>
                  <Box className="flex-1 flex justify-center">
                    <img
                      src={ObesityIcon}
                      alt="Obesitas Image"
                      className="w-8/12 lg:w-10/12 max-w-xs border-radius-md"
                    />
                  </Box>
                </Box>
              )}

              {value === 1 && (
                /* Stroke */
                <Box
                  sx={{ alignItems: 'center' }}
                  data-aos="zoom-in"
                  className="flex flex-col-reverse lg:flex-row items-center lg:py-16 py-8"
                >
                  {/* Text Column */}
                  <Box className="flex-1 lg:pl-24 lg:-mt-12">
                    <h2 className="poppins-bold lg:text-4xl text-3xl mt-10 text-dark-gr mb-3">
                      Stroke
                    </h2>
                    <p className="poppins-regular text-xl text-black">
                      Transient Ischemic Attack (TIA) atau lebih dikenal dengan
                      stroke ringan adalah serangan yang muncul secara tiba-tiba
                      berupa gejala stroke, tetapi sifatnya sementara atau dalam
                      waktu singkat. Kebanyakan stroke ringan adalah kondisi
                      yang akan bertahan selama beberapa menit hingga jam,
                      kemudian mereda dalam waktu 24 jam.
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
                  className="flex flex-col-reverse lg:flex-row items-center lg:py-16 py-8"
                >
                  {/* Text Column */}
                  <Box className="flex-1 lg:pl-24 lg:-mt-12">
                    <h2 className="poppins-bold lg:text-4xl text-3xl mt-10 text-dark-gr mb-3">
                      Hipertensi
                    </h2>
                    <p className="poppins-regular text-xl text-black">
                      Hipertensi adalah istilah medis ketika kondisi tekanan
                      darah pada arteri meningkat melebihi batas normal. Tekanan
                      darah terbagi menjadi dua bagian, yaitu sistolik dan
                      diastolik. Hipertensi ditegakkan saat kondisi tekanan
                      sistolik melebihi atau sama dengan 140 mmHg dan diastolik
                      melebihi atau sama dengan 90 mmHg.
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
                  className="flex flex-col-reverse lg:flex-row items-center lg:py-16 py-8"
                >
                  {/* Text Column */}
                  <Box className="flex-1 lg:pl-24 lg:-mt-12">
                    <h2 className="poppins-bold lg:text-4xl text-3xl mt-10 text-dark-gr mb-3">
                      Gagal Ginjal
                    </h2>
                    <p className="poppins-regular text-xl text-black">
                      Gagal ginjal adalah suatu kondisi penurunan fungsi ginjal
                      dalam menyaring limbah sisa metabolisme tubuh dari dalam
                      darah dan membuangnya melalui urin. Kondisi tersebut
                      menyebabkan kadar racun dan cairan berbahaya akan
                      mengendap dalam tubuh dan dapat berakibat fatal apabila
                      tidak ditangani.
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
                  className="flex flex-col-reverse lg:flex-row items-center lg:py-16 py-8"
                >
                  {/* Text Column */}
                  <Box className="flex-1 lg:pl-24 lg:-mt-12">
                    <h2 className="poppins-bold lg:text-4xl text-3xl mt-10 text-dark-gr mb-3">
                      Osteoporosis
                    </h2>
                    <p className="poppins-regular text-xl text-black">
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
