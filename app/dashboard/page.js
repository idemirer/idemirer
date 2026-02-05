import ChartClientWrapper from '@/components/clientWrapper';

export const metadata = {
  title: 'Hospitality Data Dashboard',
  description: 'Hospitality data dashboard, updated weekly.',
};

export default function Dashboard() {
  const updateDate = 'Feb 6, 2026';

  return (
    <div>
      <ChartClientWrapper updateDate={updateDate} />
    </div>
  );
}
