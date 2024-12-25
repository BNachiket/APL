// Function that takes a callback
function processUserInput(name, callback) {
    console.log(`Hello, ${name}!`);
    // Simulate some processing with setTimeout
    setTimeout(() => {
      console.log("Processing completed.");
      // Execute the callback function
      callback();
    }, 2000);
  }
  
  // Callback function
  function onProcessingComplete() {
    console.log("Thank you for waiting! Callback executed.");
  }
  
  // Call the function with a name and the callback
  processUserInput("Alice", onProcessingComplete);
  