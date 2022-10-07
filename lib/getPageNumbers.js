import axios from 'axios';

export async function getPageNumbers(pages) {
  const pageURL = `/api/${pages}`;
  const response = await axios.get(pageURL).then((res) => res.data);
  return response;
}
