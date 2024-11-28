const buttons = document.querySelectorAll(".canvas .button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    body.style.backgroundColor = event.target.id;
  });
});
