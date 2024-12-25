const express = require('express');
const app = express();

// Router
const router = express.Router();

// Middleware to parse JSON
app.use(express.json());

// Define routes for the router
router.get('/hello', (req, res) => {
  res.send('Hello from Router!');
});

router.post('/data', (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: 'Data received successfully',
    receivedData: { name, email }
  });
});

router.put('/update/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  res.json({
    message: `User with ID ${userId} updated`,
    updatedData: { id: userId, name, email }
  });
});

router.delete('/delete/:id', (req, res) => {
  const userId = req.params.id;
  res.json({
    message: `User with ID ${userId} deleted`
  });
});

// Use the router
app.use('/api', router);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
