import axios from 'axios';

async function getLaborStats() {
  const url = 'https://api.bls.gov/publicAPI/v2/timeseries/data/';
  const laborStats = await axios.post(
    url,
    {
      seriesid: ['CES0000000001', 'CES7000000001'],
      startyear: '2013',
      endyear: '2021',
      registrationkey: process.env.BLS_KEY,
    },
    { headers: { 'content-type': 'application/json' } }
  );
  console.log(laborStats.data);
  return laborStats.data;
}

export default async (req, res) => {
  const blsLaborStats = await getLaborStats();
  res.status(200).json(blsLaborStats);
};
