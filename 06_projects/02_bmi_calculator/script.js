const form = document.querySelector("form");

document.querySelector("#height").value = 172;
document.querySelector("#weight").value = 78;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const showResultElement = document.querySelector("#results");

  if (height <= 0 || height == "" || isNaN(height)) {
    showResultElement.innerHTML = "please input a valid height";
  } else if (weight <= 0 || weight == " " || isNaN(weight)) {
    showResultElement.innerHTML = "please input a valid weight";
  } else {
    const height_in_meters = height / 100;
    const bmi_result = (weight / (height_in_meters * height_in_meters)).toFixed(
      2
    );
    showResultElement.innerHTML = `${checkResult(bmi_result)} :: ${bmi_result}`;
  }
});

function checkResult(bmi) {
  if (bmi < 18.6) {
    return "Under Weight";
  } else if (bmi > 18.6 && bmi < 24.9) {
    return "Normal Range";
  } else if (bmi > 24.9) {
    return "Overweight ";
  } else {
    return "Entered input is invalid";
  }
}
