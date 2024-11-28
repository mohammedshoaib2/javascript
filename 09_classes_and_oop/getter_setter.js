class User {
  constructor(email) {
    this.email = email;
  }

  set email(value) {
    if (value.includes("@")) {
      this._email = value;
    } else {
      console.error("Exception: Not a email");
    }
  }
  get email() {
    console.log("get called");
    return this._email;
  }
}

let user = new User("shoaib@gmail.com");
console.log(user.email);
