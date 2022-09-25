const num1 = 5;
const num2 = 3;
const num3 = 8;
const num4 = 19;
const num5 = 87;

// display the sum
console.log("5" + "3" + "8" + "19" + "87");
const http = require('http')
const port = 8080

const server = http.createServer((request, response) =>{
response.end("5" + "3" + "8" + "19" + "87");
}) 

server.listen(port, () => {
console.log('Server listening on: http://localhost:%s', port)
})
