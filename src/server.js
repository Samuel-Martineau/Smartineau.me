import 'colors';

import * as sapper from '@sapper/server';

import compression from 'compression';
import express from 'express';
import sirv from 'sirv';

const { NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const port = process.env.PORT;

express()
  .use(compression({ threshold: 0 }), sirv('static', { dev }), sapper.middleware())
  .listen(port, (err) => {
    const stars = '******************'.yellow;
    console.log(stars + ` Server running on port ${port} ! `.blue.bold + stars);
    if (err) console.log('error', err);
  });
