const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Route to handle requests and demonstrate response methods
app.get('/send', (req, res) => {
  // 1. res.send() - Send a response with text
  res.send('Hello from Express!');

  // 2. res.json() - Send JSON response
  app.get('/json', (req, res) => {
    res.json({ message: 'This is a JSON response' });
  });

  // 3. res.status() - Set response status code
  app.get('/status', (req, res) => {
    res.status(200).send('Status set to 200 OK');
  });

  // 4. res.redirect() - Redirect to another URL
  app.get('/redirect', (req, res) => {
    res.redirect('https://www.google.com');
  });

  // 5. res.cookie() - Set a cookie
  app.get('/setcookie', (req, res) => {
    res.cookie('username', 'john_doe');
    res.send('Cookie has been set');
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
