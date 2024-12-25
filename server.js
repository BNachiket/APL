// Import the HTTP module
const http = require('http');

// Define the server's host and port
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the HTTP response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response "Hello"
  res.end('Hello');
});

// Start the server and listen on the specified port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
