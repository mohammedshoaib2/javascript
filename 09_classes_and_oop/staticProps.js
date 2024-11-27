class User {
  constructor(username) {
    this.username = username;
  }

  static setID() {
    return `123`;
  }

  logMe() {
    console.log(this.username);
  }
}

let user = new User("Shoaib");
user.logMe();
// console.log(user.setID()); //cannot access static methods

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
}

let teacher = new Teacher("Shoaib", "example@gmail.com", "123");
// console.log(teacher.setID()); //cannot access setID()
