const fs = require('fs');

// Create a writable stream
const writableStream = fs.createWriteStream('output.txt');

// Write some data to the stream
writableStream.write('Hello, this is a sample text.\n');
writableStream.write('Node.js streams are powerful.\n');

// End the writable stream
writableStream.end('Finished writing to the file.\n');

// Handle 'finish' event to confirm writing is complete
writableStream.on('finish', () => {
  console.log('Finished writing to output.txt.');
});

// Handle 'error' event in case of any error
writableStream.on('error', (err) => {
  console.error('Error writing to file:', err);
});
