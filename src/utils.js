import nodeFetch from 'node-fetch';

export const fetch = (url, options) =>
  process.browser ? window.fetch(url, options) : nodeFetch(url, options);
export const fetchJSON = (url, options) => fetch(url, options).then((res) => res.json());
