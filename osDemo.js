// Import the 'os' module
const os = require('os');

// 1. os.platform()
console.log('Operating System Platform:', os.platform());

// 2. os.type()
console.log('Operating System Type:', os.type());

// 3. os.uptime()
console.log('System Uptime:', os.uptime(), 'seconds');

// 4. os.totalmem()
console.log('Total Memory:', os.totalmem() / (1024 * 1024), 'MB');

// 5. os.cpus()
console.log('CPU Info:', os.cpus());
