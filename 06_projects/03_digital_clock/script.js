const displayTimeContainer = document.querySelector("#clock");

setInterval(() => {
  const date = new Date();
  displayTimeContainer.innerHTML = `${date.toLocaleTimeString()}`;
}, 1000);
