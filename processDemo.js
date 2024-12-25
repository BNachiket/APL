// Demonstrating 5 functions of the process global object

// 1. process.argv
console.log('Command-line arguments:', process.argv);

// 2. process.cwd()
console.log('Current working directory:', process.cwd());

// 3. process.env
console.log('Environment variables:', process.env);

// 4. process.exit()
process.exit(0); // Exiting the process with a successful code (0 means success)

// 5. process.uptime()
console.log('Process uptime:', process.uptime(), 'seconds');
