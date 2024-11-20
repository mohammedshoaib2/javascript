let myArray = ["A", "B", "D", "E", "F", "G"];

let myObj = {
  name: "Shoaib",
  age: 23,
  location: "India",
};
let str = "Hello World";

let map = new Map();

map.set("IN", "INDIA");
map.set("FR", "FRANCE");
map.set("USA", "UNITED STATES OF AMERICA");
// console.log(map);

for (const [key, val] of map) {
  //   console.log(`key is ${key} and value is ${val}`);
}

for (const val of myArray) {
  //   console.log(val);
}

for (const key in myObj) {
  //   console.log(myObj[key]);
}
for (const key in myArray) {
  //   console.log(myArray[key]);
}

myArray.forEach((item, index, array) => {
  console.log(item, index, array);
});
