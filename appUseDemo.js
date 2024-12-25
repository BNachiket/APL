const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Middleware to log request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();  // Passing control to the next middleware or route
});

// Route to handle GET request
app.get('/', (req, res) => {
  res.send('Hello from Express.js!');
});

// Route to handle POST request
app.post('/data', (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: 'Data received successfully',
    receivedData: { name, email }
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
