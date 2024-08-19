import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import 'aos/dist/aos.css';
import AOS from 'aos';

//Import custom icon
import ObesityIcon from '../assets/obesit.png';
import StrokeIcon from '../assets/stroke.png';
import HypertensionIcon from '../assets/hypertension.png';
import KidneyFailureIcon from '../assets/kidney_failure.png';
import OsteoIcon from '../assets/osteoporosis.png';
import KidneyFailureIconn from '../assets/kidney_failure2.jpg';

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
    <div className="flex flex-col items-center pt-10 pb-32 my-5 bg-lime-gr rounded-b-[4rem]">
      <h1 className="text-3xl poppins-bold">Kenali penyakit tidak menular</h1>
      <p>Akibat kurangnya aktivitas fisik</p>
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
              paddingLeft: '92px',
              paddingRight: '2px'
            }}
          >
            {value === 0 && (
              /* Obesitas */
              <Box sx={{ display: 'flex' }} data-aos="zoom-in">
                {/* Text Column */}
                <Box sx={{ flex: 1,  }}>
                  <h2 className="poppins-bold">Pengertian Obesitas</h2>
                  <p className="poppins-regular">
                    Obesitas adalah kondisi medis berupa berat badan di atas
                    normal karena penumpukan lemak berlebih. Hal tersebut
                    terjadi karena asupan kalori lebih tinggi dibandingkan
                    dengan kalori yang digunakan. Apabila kondisi ini terjadi
                    dalam kurun waktu lama, besar kemungkinan berat badan akan
                    terus bertambah.
                  </p>
                  <h3 className="poppins-bold">Penyebab Obesitas</h3>
                  <ul className="poppins-regular list-disc">
                    <li>Riwayat keluarga kandung dengan obesitas.</li>
                    <li>Sedentary lifestyle, seperti jarang berolahraga dan menghabiskan hari tanpa berkegiatan.</li>
                    <li>Mengonsumsi makanan tinggi gula dan lemak secara berlebih.</li>
                  </ul>
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
                      width: '100%',
                      maxWidth: '300px',
                      borderRadius: '8px',
                    }}
                  />
                </Box>
              </Box>
            )}
            {value === 1 && (
              /* Stroke */
              <Box sx={{ display: 'flex' }} data-aos="zoom-in">
                {/* Text Column */}
                <Box sx={{ flex: 1,  }}>
                  <h2 className="poppins-bold">Pengertian Stroke</h2>
                  <p className="poppins-regular">
                    Transient Ischemic Attack (TIA) atau lebih dikenal dengan
                    stroke ringan adalah serangan yang muncul secara tiba-tiba
                    berupa gejala stroke, tetapi sifatnya sementara atau dalam
                    waktu singkat. Kebanyakan stroke ringan adalah kondisi yang
                    akan bertahan selama beberapa menit hingga jam, kemudian
                    mereda dalam waktu 24 jam
                  </p>
                  <h3 className="poppins-bold">Penyebab Stroke</h3>
                  <ul className="poppins-regular">
                    <li>Penyebab 1</li>
                    <li>Penyebab 2</li>
                    <li>Penyebab 3</li>
                  </ul>
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
                      width: '100%',
                      maxWidth: '300px',
                      borderRadius: '8px',
                    }}
                  />
                </Box>
              </Box>
            )}
            {value === 2 && (
              /* Hipertensi */
              <Box sx={{ display: 'flex' }} data-aos="zoom-in">
                {/* Text Column */}
                <Box sx={{ flex: 1,  }}>
                  <h2>Pengertian Hipertensi</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla sed tortor quis neque accumsan fermentum. Ut a
                    elementum ex. Maecenas luctus nisl a felis placerat.
                  </p>
                  <h3>Penyebab Hipertensi</h3>
                  <ul>
                    <li>Penyebab 1</li>
                    <li>Penyebab 2</li>
                    <li>Penyebab 3</li>
                  </ul>
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
                      width: '100%',
                      maxWidth: '300px',
                      borderRadius: '8px',
                    }}
                  />
                </Box>
              </Box>
            )}
            {value === 3 && (
              <Box sx={{ display: 'flex' }} data-aos="zoom-in">
                {/* Text Column */}
                <Box sx={{ flex: 1,  }}>
                  <h2>Pengertian Gagal Ginjal</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla sed tortor quis neque accumsan fermentum. Ut a
                    elementum ex. Maecenas luctus nisl a felis placerat.
                  </p>
                  <h3>Penyebab Gagal Ginjal</h3>
                  <ul>
                    <li>Penyebab 1</li>
                    <li>Penyebab 2</li>
                    <li>Penyebab 3</li>
                  </ul>
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
                    src={KidneyFailureIconn}
                    alt="Gagal Ginjal Image"
                    style={{
                      width: '100%',
                      height: '300px',
                      borderRadius: '8px',
                    }}
                  />
                </Box>
              </Box>
            )}
            {value === 4 && (
              <Box sx={{ display: 'flex' }} data-aos="zoom-in">
                {/* Text Column */}
                <Box sx={{ flex: 1,  }}>
                  <h2>Pengertian Osteoporosis</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla sed tortor quis neque accumsan fermentum. Ut a
                    elementum ex. Maecenas luctus nisl a felis placerat.
                  </p>
                  <h3>Penyebab Osteoporosis</h3>
                  <ul>
                    <li>Penyebab 1</li>
                    <li>Penyebab 2</li>
                    <li>Penyebab 3</li>
                  </ul>
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
                      width: '100%',
                      maxWidth: '300px',
                      borderRadius: '8px',
                    }}
                  />
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </div>
    </div>
  );
}
