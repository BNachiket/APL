const fs = require('fs');

// Create a readable stream
const readableStream = fs.createReadStream('example.txt', 'utf8');

// Handle 'data' event to read chunks of data
readableStream.on('data', (chunk) => {
  console.log('Chunk of data:', chunk);
});

// Handle 'end' event to know when reading is complete
readableStream.on('end', () => {
  console.log('Finished reading the file.');
});

// Handle 'error' event in case of any error
readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});
