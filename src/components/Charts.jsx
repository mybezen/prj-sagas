import { BarChart } from '@mui/x-charts/BarChart';

export default function DiagramPenyebabUtama() {
  return (
    <div className="w-full">
      <BarChart
        series={[
          { data: [21.8], label: 'Obesitas' },
          { data: [1.09], label: 'Stroke' },
          { data: [34.1], label: 'Hipertensi' },
          { data: [0.38], label: 'Gagal Ginjal' },
          { data: [19.7], label: 'Osteoporosis' },
        ]}
        barLabel={(item, context) => {
          if ((item.value ?? 0) > 100) {
            return 'High';
          }
          return context.bar.height < 60 ? null : `${item.value?.toFixed(2)}%`;
        }}
        width={undefined}
        height={350}
        sx={{
          width: '100%',
        }}
      />
    </div>
  );
}
