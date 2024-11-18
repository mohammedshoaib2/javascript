let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let alphabets = ["A", "B", "C", "D"];

// let combinedArray = numbers.concat(alphabets);
// console.log(combinedArray);

let combinedArray = [...numbers, ...alphabets];
// console.log(combinedArray);

let newArray = [1, 2, 3, 4, [5, 6], [7, 8, [9, 10, 11]]];
// console.log(newArray);
// newArray = newArray.flat(Infinity);
// console.log(newArray);
let obj = {
  a: "1",
  b: "2",
  c: "3",
};

let score1 = 100;
let score2 = 200;
let score3 = 300;
let i = 0;

let anotherArray = Array.of(score1, score2, score3);
console.log(anotherArray);

let newAnotherArray = Array.from(numbers, (e) => {
  return e * 3;
});
console.log(newAnotherArray);
