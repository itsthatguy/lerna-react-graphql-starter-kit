import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { resolve } from 'path';
import appRoot = require('app-root-path');

import setupGraphql from './graphql';

const isProduction = process.env.NODE_ENV === 'production';

declare var module: any;

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

setupGraphql(router);

if (!isProduction) {
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
  );
}

app.use('/api', router);

if (isProduction) {
  const buildPath = resolve(appRoot.path, '..', 'frontend', '.build');

  console.log(
    '-------------------------------------------------------------------',
  );
  console.log();
  console.log('BUILD PATH', buildPath);
  console.log();
  console.log(
    '-------------------------------------------------------------------',
  );

  app.use(express.static(buildPath));
  app.all('*', (_, res) => res.sendFile(resolve(buildPath, 'index.html')));
}

export default app;
