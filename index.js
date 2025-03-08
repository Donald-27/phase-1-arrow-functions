// Define the function expression called divide
const divide = function(a, b) {
    return a / b;
  };
  
  // Define the arrow function called square
  const square = (x) => {
    return x * x;
  };
  
  // Define the arrow function called add
  const add = (a, b) => {
    return a + b;
  };
  
  // Make sure these functions are available for testing
  module.exports = { divide, square, add };
  