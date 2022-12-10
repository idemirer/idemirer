import strData from '../../assets/data/strdata.json';

export default (req, res) => {
  res.status(200).json(strData);
};
