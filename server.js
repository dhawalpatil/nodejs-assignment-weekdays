const http = require('http');
const app = require('./app');

const host = 'localhost';
const port = 3000;

const server = http.createServer(app.handleRequest);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});