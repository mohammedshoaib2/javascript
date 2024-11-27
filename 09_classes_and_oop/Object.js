function createUser(username) {
  this.username = username;
  this.greet = () => {
    console.log("hello, ", this.username);
  };
}
