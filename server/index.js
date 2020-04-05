const path = require('path');
const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT || 8080;
const app = express();
const db = require('./db/index.js');

const syncDb = () => db.sync({ force: true });

const createApp = () => {
  // logging middleware
  app.use(
    morgan('dev', {
      skip: function(req, res) {
        return req.url.indexOf('/socket.io') !== -1;
      },
    })
  );

  // body parsing middleware
  app.use(express.json({ limit: '5mb', extended: true }));
  app.use(express.urlencoded({ limit: '5mb', extended: true }));

  // auth and api routes
  app.use('/api', require('./api'));

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};

const startListening = () => {
  const server = app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  );
};

const boot = async () => {
  await syncDb();
  await startListening();
  await createApp();
};

boot();
