// Import the file system module
const fs = require('fs');

// Path to the file you want to read
const filePath = 'example.txt';

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    // Handle any errors
    console.error('Error reading the file:', err.message);
    return;
  }
  // Print the file content
  console.log('File Contents:');
  console.log(data);
});
