// function addTwoNumbers(number1, number2) {
//   const result = number1 + number1;
//   console.log(`The addition of ${number1} and ${number2} is ${result}`);
// }

// addTwoNumbers(5, 6);

// function addTwoNumbers(number1, number2) {
//   const result = number1 + number2;
//   return result;
// }

// let result = addTwoNumbers(5, 60);
// console.log(result);

function addTwoNumbers(number1, number2) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    return number1 + number2;
  }
  console.log("Not a number");
  return;
}

let result = addTwoNumbers(10, 6);
// console.log(result);

function addAllNumbers(...numbers) {
  // "..." Rest Operator
  let result = 0;
  numbers.forEach((num) => {
    result = result + num;
  });

  return result;
}

let allNumbers = addAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(allNumbers);
