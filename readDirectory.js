// Import the file system module
const fs = require('fs');

// Path to the directory to read
const directoryPath = './'; // Current directory

// Read the contents of the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    // Handle any errors
    console.error('Error reading the directory:', err.message);
    return;
  }

  // Display the contents of the directory
  console.log(`Contents of the directory '${directoryPath}':`);
  files.forEach((file) => {
    console.log(file);
  });
});
    