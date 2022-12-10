import tsaData from '../../assets/data/passengerData.json';

export default (req, res) => {
  res.status(200).json(tsaData);
};
