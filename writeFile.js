// Import the file system module
const fs = require('fs');

// File path to write to
const filePath = 'output.txt';

// Content to be written to the file
const content = 'Hello, this content is written using Node.js file system module!';

// Write the content to the file asynchronously
fs.writeFile(filePath, content, 'utf8', (err) => {
  if (err) {
    // Handle any errors
    console.error('Error writing to the file:', err.message);
    return;
  }
  console.log(`Content successfully written to ${filePath}`);
});
