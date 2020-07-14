import * as sapper from '@sapper/server';

import compression from 'compression';
import express from 'express';
import sirv from 'sirv';

const { NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express()
  .use(compression({ threshold: 0 }), sirv('static', { dev }), sapper.middleware())
  .listen(process.env.PORT, (err) => {
    if (err) console.log('error', err);
  });
