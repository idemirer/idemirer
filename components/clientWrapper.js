'use client';

import ChartComponent from './chartComponent';

export default function ChartClientWrapper({ updateDate }) {
  return <ChartComponent updateDate={updateDate} />;
}
