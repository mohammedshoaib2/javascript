let User = {
  name: "Shoaib",
};

let Teacher = {
  makeVideo: true,
};

let TASupport = {
  isAvailable: false,
  __proto__: User,
};

Object.setPrototypeOf(Teacher, User);

console.log(TASupport.name);

// 116

// To explain let us create a function

//  function a (name) {
//   this.name = name;
//  }
// When JavaScript executes this code, it adds prototype property to a, prototype property is an object with two properties to it:

// constructor
// __proto__
// So when we do

// a.prototype it returns

//      constructor: a  // function definition
//     __proto__: Object
// Now as you can see constructor is nothing but the function a itself and __proto__ points to the root level Object of JavaScript.

// Let us see what happens when we use a function with new key word.

// var b = new a ('JavaScript');
// When JavaScript executes this code it does 4 things:

// It creates a new object, an empty object // {}
// It creates __proto__ on b and makes it point to a.prototype so b.__proto__ === a.prototype
// It executes a.prototype.constructor (which is definition of function a ) with the newly created object (created in step#1) as its context (this),
// hence the name property passed as 'JavaScript' (which is added to this) gets added to newly created object.
// It returns newly created object in (created in step#1) so var b gets assigned to newly created object.
// Now if we add a.prototype.car = "BMW" and do b.car, the output "BMW" appears.

// this is because when JavaScript executed this code it searched for car property on b,
//it did not find then JavaScript used b.__proto__ (which was made to point to 'a.prototype' in step#2) and finds car property so return "BMW".
