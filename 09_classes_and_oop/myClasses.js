class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(this.username);
  }
}

let user = new User("Shoaib");

console.log(user);
user.logMe();

// Behind the Scene
// function User(username) {
//   this.username = username;
// }

// User.prototype.logMe = function () {
//   console.log(this.username);
// };

// let user = new User("Shoaib");
// console.log(user);
// user.logMe();
