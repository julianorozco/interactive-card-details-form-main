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
  form.style.display = "none";
  success.style.display = "block";
}
