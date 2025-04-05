import tsaData from '../../assets/data/passengerData.json';

export default function handler(req, res) {
  res.status(200).json(tsaData);
}
