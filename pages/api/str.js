import strData from '../../assets/data/strdatav2.json';

export default function handler(req, res) {
  res.status(200).json(strData);
}
