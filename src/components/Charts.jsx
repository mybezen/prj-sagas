import { BarChart } from '@mui/x-charts/BarChart';

export default function DiagramPenyebabUtama() {
  return (
    <div className="w-full flex items-center">
      <BarChart
        series={[
          { data: [21.80], label: 'Obesitas' },
          { data: [1.09], label: 'Stroke' },
          { data: [34.10], label: 'Hipertensi' },
          { data: [0.38], label: 'Gagal Ginjal' },
          { data: [19.70], label: 'Osteoporosis' },
        ]}
        barLabel={(item, context) => {
          if ((item.value ?? 0) > 100) {
            return 'High';
          }
          return context.bar.height < 60 ? null : `${item.value?.toFixed(2)}%`;
        }}
        width={550}
        height={350}
        sx={{
          width: '100%',
        }}
      />
    </div>
  );
}
