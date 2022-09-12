var regex = /[0-9]/g;
function writeCardholderName() {
  let writeName = document.getElementById("CardholderName");
  let name = document.getElementById("name");
  writeName.innerHTML = "" + name.value + "";
}
function writeCardholderNumber() {
  let writeNumber = document.getElementById("CardholderNumber");
  let number = document.getElementById("number");
  writeNumber.innerHTML =
    "" + number.value.slice(0, 4) + " " + number.value.slice(4, 8) + " " + number.value.slice(8, 12) + " " + number.value.slice(12, 18) + "";
}
function writeCardholderMM() {
  let writeMM = document.getElementById("CardholderMM");
  let mm = document.getElementById("mm");
  writeMM.innerHTML = "" + mm.value + "";
}
function writeCardholderYY() {
  let writeYY = document.getElementById("CardholderYY");
  let yy = document.getElementById("yy");
  writeYY.innerHTML = "" + yy.value + "";
}
function writeCardholderCVC() {
  let writeCVC = document.getElementById("CardholderCVC");
  let cvc = document.getElementById("cvc");
  writeCVC.innerHTML = "" + cvc.value + "";
}
function success() {
  let form = document.getElementById("form");
  let success = document.getElementById("success");
  if (
    validationCardholderName() &&
    validationCardholderNumber() &&
    validationCardholderMM() &&
    validationCardholderYY() &&
    validationCardholderCVC()
  ) {
    form.style.display = "none";
    success.style.display = "block";
  } else {
    console.log("error");
  }
}
function validationCardholderName() {
  let CardholderName = document.getElementById("name").value;
  let errorCardholderName = document.getElementById("errorCardholderName");
  let inputCardholderName = document.getElementById("name");
  if (CardholderName == "") {
    errorCardholderName.style.display = "block";
    errorCardholderName.innerHTML = "Can't be blank";
    inputCardholderName.style.borderColor = "red";
    return false;
  } else if (CardholderName.match(regex)) {
    errorCardholderName.style.display = "block";
    errorCardholderName.innerHTML = "Wrong format, letters only";
    inputCardholderName.style.borderColor = "red";
    return false;
  } else {
    errorCardholderName.style.display = "none";
    inputCardholderName.style.borderColor = "hsl(278, 100%, 59%)";
    return true;
  }
}
function validationCardholderNumber() {
  let CardholderNumber = document.getElementById("number").value;
  let errorCardholderNumber = document.getElementById("errorCardholderNumber");
  let inputCardholderNumber = document.getElementById("number");
  if (CardholderNumber == "") {
    errorCardholderNumber.style.display = "block";
    errorCardholderNumber.innerHTML = "Can't be blank";
    inputCardholderNumber.style.borderColor = "red";
    return false;
  } else if (isNaN(CardholderNumber)) {
    errorCardholderNumber.style.display = "block";
    errorCardholderNumber.innerHTML = "Wrong format, numbers only";
    inputCardholderNumber.style.borderColor = "red";
    return false;
  } else {
    errorCardholderNumber.style.display = "none";
    inputCardholderNumber.style.borderColor = "hsl(278, 100%, 59%)";
    return true;
  }
}
function validationCardholderMM() {
  let CardholderMM = document.getElementById("mm").value;
  let errorCardholderMMYY = document.getElementById("errorCardholderMMYY");
  let inputCardholderMM = document.getElementById("mm");
  if (CardholderMM == "") {
    errorCardholderMMYY.style.display = "block";
    errorCardholderMMYY.innerHTML = "Can't be blank";
    inputCardholderMM.style.borderColor = "red";
    return false;
  } else if (isNaN(CardholderMM)) {
    errorCardholderMMYY.style.display = "block";
    errorCardholderMMYY.innerHTML = "Wrong format, numbers only";
    errorCardholderMMYY.style.borderColor = "red";
    return false;
  } else {
    errorCardholderMMYY.style.display = "none";
    inputCardholderMM.style.borderColor = "hsl(278, 100%, 59%)";
    return true;
  }
}
function validationCardholderYY() {
  let CardholderYY = document.getElementById("yy").value;
  let errorCardholderMMYY = document.getElementById("errorCardholderMMYY");
  let inputCardholderYY = document.getElementById("yy");
  if (CardholderYY == "") {
    errorCardholderMMYY.style.display = "block";
    errorCardholderMMYY.innerHTML = "Can't be blank";
    inputCardholderYY.style.borderColor = "red";
    return false;
  } else if (isNaN(CardholderYY)) {
    errorCardholderMMYY.style.display = "block";
    errorCardholderMMYY.innerHTML = "Wrong format, numbers only";
    errorCardholderMMYY.style.borderColor = "red";
    return false;
  } else {
    errorCardholderMMYY.style.display = "none";
    inputCardholderYY.style.borderColor = "hsl(278, 100%, 59%)";
    return true;
  }
}
function validationCardholderCVC() {
  let CardholderCVC = document.getElementById("cvc").value;
  let errorCardholderCVC = document.getElementById("errorCardholderCVC");
  let inputCardholderCVC = document.getElementById("cvc");
  if (CardholderCVC == "") {
    errorCardholderCVC.style.display = "block";
    errorCardholderCVC.innerHTML = "Can't be blank";
    inputCardholderCVC.style.borderColor = "red";
    return false;
  } else if (isNaN(CardholderCVC)) {
    errorCardholderCVC.style.display = "block";
    errorCardholderCVC.innerHTML = "Wrong format, numbers only";
    inputCardholderCVC.style.borderColor = "red";
    return false;
  } else {
    errorCardholderCVC.style.display = "none";
    inputCardholderCVC.style.borderColor = "hsl(278, 100%, 59%)";
    return true;
  }
}
