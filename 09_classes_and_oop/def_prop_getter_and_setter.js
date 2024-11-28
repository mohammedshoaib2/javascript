function User(email, password) {
  this._email = email;
  this.password = password;

  Object.defineProperty(this, "email", {
    set: function (value) {
      this._email = value;
    },

    get: function () {
      return this._email.toUpperCase();
    },
  });
}

let user = new User("shoaib@gmail.com", "abc");
console.log(user.email);
