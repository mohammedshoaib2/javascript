const regularUser = {
  name: {
    fullname: {
      firstname: "Mohammed",
      lastname: "Shoaib",
    },
  },

  age: 23,
  islOggedIn: false,
};

// console.log(regularUser.name.fullname.firstname);
// console.log(regularUser["name"]["fullname"]["firstname"]);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const combinedObj = Object.assign({}, obj1, obj2);
// console.log(combinedObj);

const combinedObj = { ...obj1, ...obj2 }; //Object combining
console.log(combinedObj);

const User = [
  {
    name: "name1",
    age: 21,
  },
  {
    name: "name1",
    age: 21,
  },
  {
    name: "name1",
    age: 21,
  },
  {
    name: "name1",
    age: 21,
  },
  {
    name: "name1",
    age: 21,
  },
  {
    name: "name1",
    age: 21,
  },
  {
    name: "name1",
    age: 21,
  },
];

console.log(User[0].name);
