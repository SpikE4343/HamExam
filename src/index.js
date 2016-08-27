'use strict';

const app = require('./app');
const port = process.env.PORT || app.get('port');
const server = app.listen(port);

console.log( `port = ${process.env.PORT}`);
server.on('listening', () =>
  console.log(`Feathers application started on ${app.get('host')}:${port}`)
);
