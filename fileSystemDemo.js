// Import the file system module
const fs = require('fs');

// 1. Write to a file
fs.writeFile('example.txt', 'This is the initial content.', 'utf8', (err) => {
  if (err) {
    console.error('Error writing to the file:', err.message);
    return;
  }
  console.log('File written successfully.');

  // 2. Append content to the file
  fs.appendFile('example.txt', '\nThis content was appended.', 'utf8', (err) => {
    if (err) {
      console.error('Error appending to the file:', err.message);
      return;
    }
    console.log('Content appended successfully.');

    // 3. Read the file
    fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err.message);
        return;
      }
      console.log('File contents:');
      console.log(data);

      // 4. Rename the file
      fs.rename('example.txt', 'renamed_example.txt', (err) => {
        if (err) {
          console.error('Error renaming the file:', err.message);
          return;
        }
        console.log('File renamed successfully.');

        // 5. Delete the file
        fs.unlink('renamed_example.txt', (err) => {
          if (err) {
            console.error('Error deleting the file:', err.message);
            return;
          }
          console.log('File deleted successfully.');
        });
      });
    });
  });
});
