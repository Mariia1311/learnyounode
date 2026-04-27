const http = require('http');
const results = [];
let count = 0;

function printResults() {
  for (let i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function httpGet(index) {
  http.get(process.argv[2 + index], (response) => {
    let result = '';
    response.setEncoding('utf8');

    response.on('data', (data) => {
      result += data;
    });

    response.on('end', () => {
      results[index] = result;
      count++;

      if (count === 3) {
        printResults();
      }
    });

    response.on('error', console.error);
  }).on('error', console.error);
}

for (let i = 0; i < 3; i++) {
  httpGet(i);
}