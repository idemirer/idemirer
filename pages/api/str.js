import strData from '../../assets/data/strdatav2.json';

export default (req, res) => {
  res.status(200).json(strData);
};
