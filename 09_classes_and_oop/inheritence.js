class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(this.username);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
}

let teacher = new Teacher("Shoaib", "example@gmail.com", "123");

console.log(teacher);
teacher.logMe();
console.log(teacher.encryptPassword());

//=============================================================

//Behind the scene

// function User(username) {
//   this.username = username;
// }

// User.prototype.logMe = function () {
//   console.log(this.username);
// };

// function Teacher(username, email, password) {
//   User.call(this, username);
//   this.password = password;
//   this.email = email;
// }

// Teacher.prototype.encryptPassword = function () {
//   return `${this.password}abc`;
// };

// //inheritence

// Object.setPrototypeOf(Teacher.prototype, User.prototype);

// let teacher = new Teacher("Shoaib", "example@gmail.com", "123");

// console.log(teacher);
// teacher.logMe();
// console.log(teacher.encryptPassword());
