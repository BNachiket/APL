const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Route to handle POST request
app.post('/submit', (req, res) => {
  // Access request body data
  const { name, email } = req.body;

  // Send back the received data as a JSON response
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
