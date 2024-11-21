let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let nums = array.map((element) => {
  return element + 10;
});
// console.log(nums);

const newArray = array
  .map((element) => {
    return element * 10;
  })
  .map((element) => {
    return element + 5;
  })
  .filter((element) => element >= 45);

console.log(newArray);
