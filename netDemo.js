// Import the 'net' module
const net = require('net');

// 1. net.createServer()
// Create a TCP server
const server = net.createServer((socket) => {
  console.log('Client connected');
  
  socket.write('Hello from server!\n');
  socket.end('Goodbye from server\n');
});

// Start the server on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Server listening on port 3000');
});

// 2. net.connect()
// Create a TCP client and connect to the server
const client = net.connect({ port: 3000, host: '127.0.0.1' }, () => {
  console.log('Connected to server');
  
  client.on('data', (data) => {
    console.log('Server says:', data.toString());
    client.end();
  });
  
  client.on('end', () => {
    console.log('Disconnected from server');
  });
});

// 3. net.Server.prototype.close()
// Close the server
server.close(() => {
  console.log('Server closed');
});

// 4. net.Server.prototype.listen()
// Listen to the connection on a different port
server.listen(4000, '127.0.0.1', () => {
  console.log('Server is now listening on port 4000');
});

// 5. net.createConnection()
// Create a new connection
const newClient = net.createConnection({ port: 4000, host: '127.0.0.1' }, () => {
  console.log('New client connected to port 4000');
  
  newClient.write('Hello from new client!\n');
  
  newClient.on('data', (data) => {
    console.log('New server response:', data.toString());
    newClient.end();
  });
  
  newClient.on('end', () => {
    console.log('New client disconnected');
  });
});
