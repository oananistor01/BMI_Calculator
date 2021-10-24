console.log("main.js is loaded...");

var heightCtrl = document.querySelector("#height");
var weightCtrl = document.querySelector("#weight");
var bmiDisplay = document.querySelector("#bmi-display");
var userMsg = document.querySelector("#user-message");

function calculateBMI() {
  var height = heightCtrl.value;
  var weight = weightCtrl.value;
  var userInputOK = true;

  if (validateFloat(height)) {
    heightCtrl.classList.remove("is-invalid");
  } else {
    heightCtrl.classList.add("is-invalid");
    userInputOK = false;
  }

  if (validateFloat(weight)) {
    weightCtrl.classList.remove("is-invalid");
  } else {
    weightCtrl.classList.add("is-invalid");
    userInputOK = false;
  }

  if (userInputOK) {
    var bmi = weight / (height * height);
    bmiDisplay.innerText = bmi.toFixed(2);
    displayUserMessage(bmi);
  }
}

function displayUserMessage(bmi) {
  if (bmi < 18.5) {
    userMsg.innerText = "You are underweight! Grab a Snickers!";
    userMsg.classList.add("alert-warning");
    userMsg.classList.remove("alert-success", "alert-danger");
  } else {
    if (bmi <= 24.9) {
      userMsg.innerText = "WOW! You perfect looking human specimen!";
      userMsg.classList.add("alert-success");
      userMsg.classList.remove("alert-warning", "alert-danger");
    } else {
      userMsg.innerText =
        "You're a perfect looking human specimen in progress!";
      userMsg.classList.add("alert-danger");
      userMsg.classList.remove("alert-success", "alert-warning");
    }
  }
}
