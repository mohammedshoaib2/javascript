function SetUsername(username) {
  this.username = username;
}

function CreateUser(username, email, password) {
  SetUsername.call(this, username);

  this.email = email;
  this.password = password;
}

let user = new CreateUser("Shoaib", "example@gmail.com", "123");
console.log(user);
