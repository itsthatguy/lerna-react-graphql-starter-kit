require('dotenv').config({ path: '../../.env' });
import { Application } from 'express';

declare var module;

async function start() {
  const app: Application = require('./server').default;

  const httpServer = app.listen(process.env.BACKEND_PORT || 3002, function(
    error,
  ) {
    if (error) {
      console.error(error);
    } else {
      const address: any = httpServer.address();
      console.info(
        `==> 🌎 Listening on ${address.port}. Open up http://localhost:${
          address.port
        }/ in your browser.`,
      );
    }
  });
}

start();
