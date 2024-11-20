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

// function addTwoNumbers(number1, number2) {
//   if (typeof number1 === "number" && typeof number2 === "number") {
//     return number1 + number2;
//   }
//   console.log("Not a number");
//   return;
// }
// let n = 1000;

// let result = addTwoNumbers(10, 6);
// // console.log(result);

// function addAllNumbers(...numbers) {
//   // "..." Rest Operator
//   let result = 0;
//   numbers.forEach((num) => {
//     result = result + num;
//   });

//   return result;
// }

// let allNumbers = addAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// console.log(allNumbers);

// let a = 10;
// if (true) {
//   a = 100;
//   console.log(a);
// }

// console.log(a);
// const obj = {
//   name: "shoaib",
//   greet: function () {
//     // console.log(this); // "this" refers to obj

//     function inner() {
//       console.log(this); // "this" refers to window (not obj)
//     }

//     inner();
//   },
// };

// obj.greet();

// this.a = 10;
// function addOne(num) {
//   let name = "shoaib";

//   console.log(this.a);

//   return num + 1;
// }

// addOne();

// console.log(this.a);

// let height = 6;

// let user = {
//   name: "shoaib",
//   greet: function () {
//     console.log("Welcome, ", user.name);
//   },
// };

// user.greet();

// let user = {};
// undefined;
// function func() {
//   console.log(this);
// }
// undefined;
// func.call(user);

// function Person(name) {
//   this.name = name;

//   this.greet = function () {
//     console.log("Hello ", this.name);
//   };

//   // `this` is bound to the new object being created
// }

// let person = new Person("Shoaib"); // Create a new object

// console.log(person); // "Shoaib"

// let user = {
//   name: "Shoaib",
//   greet: function () {
//     console.log("Hello, ", this.name);
//   },
// };

// user.greet();

// greetvar.call(user);

// function test() {
//   console.log(this); // `this` refers to the global object
// }

// test.call({ name: "Custom"  });
