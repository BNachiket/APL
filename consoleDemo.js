// Demonstrating 5 functions of the console global object

// 1. console.log()
console.log('This is a regular log message.');

// 2. console.error()
console.error('This is an error message.');

// 3. console.warn()
console.warn('This is a warning message.');

// 4. console.info()
console.info('This is an informational message.');

// 5. console.time() and console.timeEnd()
console.time('Timer'); // Start a timer
for (let i = 0; i < 5; i++) {
  console.log('Loop iteration:', i + 1);
}
console.timeEnd('Timer'); // End the timer
