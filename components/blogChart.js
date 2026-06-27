'use client';
import dynamic from 'next/dynamic';
import { useTheme } from '@/context/ThemeContext';
import strData from '@/assets/data/strdata.json';

const ApexChart = dynamic(() => import('react-apexcharts').then((m) => m.default), { ssr: false });

const METRICS = {
  occupancy: { key: 'occupancy', title: 'U.S. Hotel Occupancy (Weekly)', yMin: 20, yMax: 80 },
  adr: { key: 'ADR', title: 'U.S. Hotel ADR (Weekly)', yMin: 60, yMax: 180 },
  revpar: { key: 'RevPAR', title: 'U.S. Hotel RevPAR (Weekly)', yMin: 0, yMax: 130 },
};

const SHOW_YEARS = ['2019', '2024', '2025', '2026'];

export default function BlogChart({ type = 'occupancy', height = '380' }) {
  const { theme } = useTheme();
  const metric = METRICS[type];
  if (!metric) return null;

  const latestYear = SHOW_YEARS[SHOW_YEARS.length - 1];

  const series = SHOW_YEARS.map((year) => ({
    name: year,
    data: strData[year]?.[metric.key].slice(0, 52) ?? [],
  }));

  const strokeWidths = SHOW_YEARS.map((_, i) => (i === SHOW_YEARS.length - 1 ? 3 : 1.5));
  const opacities = SHOW_YEARS.map((_, i) => (i === SHOW_YEARS.length - 1 ? 1 : 0.4));

  const options = {
    chart: {
      background: 'transparent',
      type: 'line',
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: 'Inter, system-ui, sans-serif',
    },
    title: {
      text: metric.title,
      align: 'left',
      offsetX: 4,
      style: { fontWeight: 600, fontSize: '15px' },
    },
    subtitle: {
      text: 'Source: STR / CoStar',
      align: 'left',
      offsetX: 4,
      style: { color: '#9C9C9C', fontSize: '11px' },
    },
    stroke: { curve: 'smooth', width: strokeWidths },
    fill: { type: 'solid', opacity: opacities },
    xaxis: {
      categories: strData[latestYear]?.date ?? [],
      labels: { rotate: -45, maxHeight: 50 },
      tickAmount: 18,
      tickPlacement: 'on',
    },
    yaxis: { min: metric.yMin, max: metric.yMax, tickAmount: 6, decimalsInFloat: 1 },
    legend: { height: 35 },
    dataLabels: { enabled: false },
    grid: {
      borderColor: '#ccc',
      yaxis: { lines: { show: false } },
    },
    theme: { mode: theme, palette: 'palette6' },
  };

  return (
    <div className='card rounded-xl p-3 my-6 overflow-hidden'>
      <ApexChart series={series} options={options} type='line' height={parseInt(height)} />
    </div>
  );
}
