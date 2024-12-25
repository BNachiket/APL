const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Route to demonstrate different HTTP methods
app.get('/method', (req, res) => {
  // 1. Get the HTTP method using req.method
  const method = req.method;

  if (method === 'GET') {
    res.send('This is a GET request');
  } else if (method === 'POST') {
    res.send('This is a POST request');
  } else if (method === 'PUT') {
    res.send('This is a PUT request');
  } else if (method === 'DELETE') {
    res.send('This is a DELETE request');
  } else {
    res.send(`Received a ${method} request`);
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
