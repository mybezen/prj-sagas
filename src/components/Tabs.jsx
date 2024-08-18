import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Box } from '@mui/material';

export default function IconLabelTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange =(event,newValue) => {
        setValue(newValue);
    };

    return (
        <div className='flex flex-col items-center px-4 py-4 mx-5 my-5'>

        <Box>
        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
            <Tab icon={<PhoneIcon />} label="Obesitas" />
            <Tab icon={<PhoneIcon />} label="Stroke" />
            <Tab icon={<PhoneIcon />} label="Hipertensi" />
            <Tab icon={<FavoriteIcon />} label="Gagal Ginjal" />
            <Tab icon={<PersonPinIcon />} label="Osteoporosis" />
        </Tabs>


        {value === 0 && <Box className='p-4'>Obesitas adalah kondisi medis berupa berat badan di atas normal karena penumpukan lemak berlebih. Hal tersebut terjadi karena asupan kalori lebih tinggi dibandingkan dengan kalori yang digunakan. Apabila kondisi ini terjadi dalam kurun waktu lama, besar kemungkinan berat badan akan terus bertambah.</Box>}
        {value === 1 && <Box className='p-4'>Transient Ischemic Attack (TIA) atau lebih dikenal dengan stroke ringan adalah serangan yang muncul secara tiba-tiba berupa gejala stroke, tetapi sifatnya sementara atau dalam waktu singkat. Kebanyakan stroke ringan adalah kondisi yang akan bertahan selama beberapa menit hingga jam, kemudian mereda dalam waktu 24 jam.</Box>}
        {value === 2 && <Box className='p-4'>Hipertensi adalah istilah medis ketika kondisi tekanan darah pada arteri meningkat melebihi batas normal. Tekanan darah terbagi menjadi dua bagian, yaitu sistolik dan diastolik.

Tekanan sistolik adalah tekanan ketika jantung memompa darah keseluruh tubuh. Sedangkan tekanan diastolik adalah tekanan ketika jantung berada dalam kondisi rileks saat menerima darah kembali ke ruang jantung sebelum kembali memompakannya ke seluruh tubuh. Hipertensi ditegakkan saat kondisi tekanan sistolik melebihi atau sama dengan 140 mmHg dan diastolik melebihi atau sama dengan 90 mmHg. 
</Box>}
        {value === 3 && <Box className='p-4'>Gagal ginjal adalah suatu kondisi penurunan fungsi ginjal dalam menyaring limbah sisa metabolisme tubuh dari dalam darah dan membuangnya melalui urin. Kondisi tersebut menyebabkan kadar racun dan cairan berbahaya akan mengendap dalam tubuh dan dapat berakibat fatal apabila tidak ditangani.</Box>}
        {value === 4 && <Box className='p-4'>Osteoporosis adalah kondisi ketika kepadatan tulang berkurang sehingga tulang menjadi keropos dan mudah patah. Osteoporosis jarang menimbulkan gejala dan biasanya baru diketahui ketika penderitanya jatuh atau mengalami cedera yang menyebabkan patah tulang.</Box>}
    </Box>
        </div>
    );
}
