const userOne = {
  username: "Shoaib",
  loginCount: 12,
  isLoggedIn: true,
};

const userTwo = {
  username: "Mohammed",
  loginCount: 2,
  isLoggedIn: false,
};

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greet = function () {
    console.log(`Hello, ${this.username}`);
  };

  return this;
}

const user1 = new User("Shoaib", 12, true);
const user2 = new User("Mohammed", 2, false);
// console.log(user1.greet());
// console.log(user2.greet());

// console.log(user1 instanceof User);
// console.log(user2 instanceof User);
