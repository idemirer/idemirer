import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function CreateChart({ data, options, type, width }) {
  const [chartOptions] = useState(options);
  const [chartSeries] = useState(data);

  return (
    <div className='chart'>
      <Chart options={chartOptions} series={chartSeries} type={type} width={width} />
    </div>
  );
}
