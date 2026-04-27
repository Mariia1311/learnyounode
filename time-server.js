const net = require('net');

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i;
}

const server = net.createServer((socket) => {
  const d = new Date();
  const s = d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes()) + '\n';
  socket.end(s);
});

server.listen(Number(process.argv[2]));