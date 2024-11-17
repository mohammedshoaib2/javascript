let number = 100; //number
let name = "example"; //NaN
let marks = "98"; //number
let is_logged_in = true; //1
let is_eligible = undefined; //NaN
let score = null; //0

let toNumber = Number(name);
// let toNumber = Number(marks);
console.log(typeof toNumber);
console.log(toNumber);

let bool = undefined;
let converted_bool = Boolean(bool);
console.log(typeof converted_bool);
console.log(converted_bool);

// conversion to Boolean
// 0 => false , 1 => true
// "" => false, "something" => true
//100 => true
//undefined => false
//null => false

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);
console.log(2 / 2);
console.log(2 % 2);

// prefix
let j = 0;
let a = ++j;
console.log(a);

// postfix
let i = 0;
let b = i++;
console.log(b);
