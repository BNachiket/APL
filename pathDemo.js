// Import the 'path' module
const path = require('path');

// 1. path.basename()
console.log('Base name of the file:', path.basename(__filename));

// 2. path.dirname()
console.log('Directory name of the file:', path.dirname(__filename));

// 3. path.extname()
console.log('File extension:', path.extname(__filename));

// 4. path.join()
console.log('Joined path:', path.join(__dirname, 'test', 'file.txt'));

// 5. path.resolve()
console.log('Resolved path:', path.resolve('test', 'file.txt'));
