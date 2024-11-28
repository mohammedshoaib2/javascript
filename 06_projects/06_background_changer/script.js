let body = document.querySelector("body");

const randomColorGenerator = function () {
  let colorString = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color = color + colorString[Math.round(Math.random() * (15 - 0) + 0)] ?? 1;
  }

  return color;
};

let colorChangeInterval;

document.getElementById("start").addEventListener(
  "click",
  (e) => {
    if (colorChangeInterval == null) {
      colorChangeInterval = setInterval(() => {
        body.style.backgroundColor = randomColorGenerator();
      }, 1000);
    }
  },
  false
);

document.getElementById("stop").addEventListener(
  "click",
  (e) => {
    if (colorChangeInterval) {
      clearInterval(colorChangeInterval);
      colorChangeInterval = null;
    }
  },
  false
);
