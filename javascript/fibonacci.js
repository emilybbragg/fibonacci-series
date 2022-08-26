function fibonacci(num) {
  if (num < 2) {
    return num;
  }

  let previousVals = [0, 1]

  for (let i = 0; i < num-1; ++i) {
    const newSum = previousVals[0] + previousVals[1];
    previousVals = [previousVals[1], newSum];
  }

  return previousVals[1];
}

//takes in a number as an argument
//for each number, add together all previous numbers (which is n value)
//returns n value


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
