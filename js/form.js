function writeCardholderName() {
  let writeName = document.getElementById("CardholderName");
  let name = document.getElementById("name");
  writeName.innerHTML = "" + name.value + "";
}

function writeCardholderNumber() {
  let writeNumber = document.getElementById("CardholderNumber");
  let number = document.getElementById("number");
  writeNumber.innerHTML = "" + number.value + "";
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