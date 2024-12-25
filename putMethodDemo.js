const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Sample data store (in-memory array)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
];

// Route to handle PUT request
app.put('/update/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;

  // Find the user by ID
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex !== -1) {
    // Update the user
    users[userIndex] = { id: userId, name, email };
    res.json({
      message: 'User updated successfully',
      updatedUser: users[userIndex]
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
