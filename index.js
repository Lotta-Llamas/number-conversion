import http from 'node:http';
import numberConversion from '../number-name/lib/number-conversion.js';

const server = http.createServer();

server.on('request', async (req, res) => {
    res.writeHead(200);
    res.end(await numberConversion('8333'));
})

server.listen(8000);