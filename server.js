/* global*/

const jsonServer = require('http-server');
const server = jsonServer.create();
const router = jsonServer.router('dist/scripts_bundle.js');
const middlewares = jsonServer.defaults({
  static: 'dist',
});
const port = process.env.PORT || 3131;

server.use(middlewares);
server.use(router);

server.listen(port);