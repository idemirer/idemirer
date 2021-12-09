import axios from 'axios';

const GetLaborStats = () => {
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
  return laborStats.data;
};

export default GetLaborStats;
