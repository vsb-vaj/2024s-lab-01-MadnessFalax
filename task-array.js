// EXERCISE:
// You can write all the code natively (for cycles and such) or you can use some advanced functions which JS arrays provides in case you see them fit
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// There can be multiple solutions to each task, solve it as you see fit.
// You will work with array `numbers` which will be generated by code (code below) in every task.
// Write these functions:

// This block generates array with random length with values between 1-100
let numbers = [];
const length = Math.ceil(Math.random() * 10) + 5;
for (let i = 0; i < length; i = i + 1) {
  numbers.push(Math.ceil(Math.random() * 100));
}

function pr(a) {
  console.log(a);
}

// a) Function which will print to console a whole array
const printArray = (numbers) => {
  // Your code:
  numbers.forEach((element) => console.log(element));
};

// b) Function which will print to console the length of array
const printLength = (numbers) => {
  // Your code:
  console.log(numbers.length);
};

// c) Function which will print to console the first element of array
const printFirstItem = (numbers) => {
  // Your code:
  pr(numbers[0]);
};

// d) Function which will print to console the last element
const printLastItem = (numbers) => {
  // Your code:
  pr(numbers.slice(-1)[0]);
};

// e) Function which will print to console the largest number (You can check Math functions)
const printLargestItem = (numbers) => {
  // Your code:
  pr(Math.max(...numbers));
};

// f) Function which will print to console the smallest number (You can check Math functions)
const printSmallestItem = (numbers) => {
  // Your code:
  pr(Math.min(...numbers));
};

// g) Function which will print to console the sum of all numbers in array (You can check reduce function)
const printSum = (numbers) => {
  // Your code:
  pr(
    numbers.reduce((prec, cur) => {
      return prec + cur;
    }),
  );
};

// h) Function which will print to console the difference between the largest and the smallest number (You can check Math functions)
const printSALDifference = (numbers) => {
  // Your code:
  pr(Math.max(...numbers) - Math.min(...numbers));
};

// i) Function which will print to console the average of all numbers (You can check reduce function)
const printAverage = (numbers) => {
  // Your code:

  // for better readability
  res = numbers.reduce((prec, cur) => {
    return prec + cur;
  });

  res /= numbers.length;

  pr(res);
};

// j) Function which will print to console the index of largest number (You can check Math functions)
const printLargestsIndex = (numbers) => {
  // Your code:
  pr(numbers.findIndex((x) => x == Math.max(...numbers)));
};

// k) Function which will print to console the even numbers (not the array of even numbers),
// if array doesn't contain any even number, show text "Even number isn't in array"
const printEvenNums = (numbers) => {
  // Your code:
  if (numbers.find((x) => x % 2 == 0) === undefined) {
    pr("Even number isn't in array");
  } else {
    var res = numbers.reduce((prec, cur) => {
      if (cur % 2 == 0) {
        prec.push(cur);
        return prec;
      } else return prec;
    }, []);
    printArray(res);
  }
};

// l) Function which will multiple by 2 every number in array and print the array to console
// Example: printNumsMultipliedBy2([1,2,3]) -> [2,4,6]
const printNumsMultipliedBy2 = (numbers) => {
  // Your code:
  printArray(numbers.map((x) => x * 2));
};

function test() {
  printArray(numbers);
  pr("----------------");
  printLength(numbers);
  pr("----------------");
  printFirstItem(numbers);
  pr("----------------");
  printLastItem(numbers);
  pr("----------------");
  printLargestItem(numbers);
  pr("----------------");
  printSmallestItem(numbers);
  pr("----------------");
  printSum(numbers);
  pr("----------------");
  printSALDifference(numbers);
  pr("----------------");
  printAverage(numbers);
  pr("----------------");
  printLargestsIndex(numbers);
  pr("----------------");
  printEvenNums(numbers);
  pr("----------------");
  printNumsMultipliedBy2(numbers);
  pr("----------------");
}

// test();
