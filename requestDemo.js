const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Route to handle GET request
app.get('/info', (req, res) => {
  // 1. req.query - Access query parameters
  const name = req.query.name || 'Guest';
  res.send(`Hello, ${name}!`);

  // 2. req.params - Access route parameters
  app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is ${userId}`);
  });

  // 3. req.body - Access request body
  app.post('/submit', (req, res) => {
    const data = req.body;
    res.json({ message: 'Data received', data });
  });

  // 4. req.headers - Access request headers
  app.get('/headers', (req, res) => {
    const headers = req.headers;
    res.json(headers);
  });

  // 5. req.cookies - Access cookies
  app.get('/cookies', (req, res) => {
    const cookies = req.cookies;
    res.json({ cookies });
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
