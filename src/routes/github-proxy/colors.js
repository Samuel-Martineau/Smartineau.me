import { fetchJSON } from '../../utils';

let lastRefresh = 0;
let data;

export async function get(req, res) {
  if (Date.now() > lastRefresh + 60 * 60 * 1000) {
    data = await fetchJSON(
      'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
    );
    lastRefresh: Date.now();
  }
  return res.status(200).send(data);
}
