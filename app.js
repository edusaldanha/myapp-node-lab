const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Pipeline Node.js funcionando vagabundo!\n');
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found\n');
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});