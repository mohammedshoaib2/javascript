const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

let myObj = {
  name: "Shoaib",
  age: 23,
  isAvailable: true,
  greet: function () {
    console.log(this.name);
  },
};
console.log(myObj);

Object.defineProperty(myObj, "greet", {
  writable: false,
  enumerable: false,
  configurable: false,
});

// console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

for (const key in myObj) {
  console.log(myObj[key]);
}
