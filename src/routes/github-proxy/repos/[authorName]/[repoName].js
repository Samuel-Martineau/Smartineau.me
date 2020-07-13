import { fetchJSON } from '../../../../utils';

let reposCache = {};

export async function get({ params: { authorName, repoName } }, res) {
  const fullRepoName = `${authorName}/${repoName}`;

  if (
    !(fullRepoName in reposCache) ||
    Date.now() > reposCache[fullRepoName].lastRefresh + 60 * 60 * 1000
  )
    reposCache[fullRepoName] = {
      data: await fetchJSON(`https://api.github.com/repos/${fullRepoName}`),
      lastRefresh: Date.now(),
    };

  res.status(200).send(reposCache[fullRepoName].data);
  // res.status(200).send(JSON.stringify({}));
}
