const http = require('http');

let server = http.createServer((req, res) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        /** add other headers as per requirement */
        'Content-Type': 'application/json',
      };
    res.writeHead(200, headers);
    let str = [{"name": "Mohammad Shais Sheikh", "age" : "20"},{"name": "Umar Farooque", "age" : "28"},{"name": "Razi Uddin", "age" : "24"}];
    res.end(JSON.stringify(str));
})

server.listen(3000);

console.log(`Server running on http://localhost:3000`);