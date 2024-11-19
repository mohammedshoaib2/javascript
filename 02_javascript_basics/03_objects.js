let userKeySym = Symbol("userKey");

const User = {
  name: "shoaib",
  "full name": "Mohammed Shoaib",
  age: 23,
  email: "thismohdshoaib@gmail.com",
  location: "Hyderabad",
  isLoggedIn: false,
  [userKeySym]: "AfDaeeiasppejkvdxkjlxlcdddwjoowdbd",
};

// console.log(User);

User.isEligible = true; // Adding properties to the User Object

// console.log(User["name"]); //another method to access User properties

// console.log(User);
// Object.freeze(User); //this freezes the Object

// User.age = 25;

User.greet = function () {
  console.log(`Hello, ${this.name}`);
};

// console.log(User.greet());
console.log(Object.keys(User));
console.log(Object.values(User));
