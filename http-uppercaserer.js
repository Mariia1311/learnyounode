const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') return res.end('Send me a POST\n');

  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString().toUpperCase();
  });

  req.on('end', () => {
    res.end(body);
  });
});

server.listen(Number(process.argv[2]));