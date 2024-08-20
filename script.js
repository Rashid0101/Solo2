/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input-number");
let lengthEl = document.getElementById("length-el-meters");
let lengthElLiters = document.getElementById("length-el-liters");
let lengthElMass = document.getElementById("length-el-mass");

const meterToFeet = 3.281;
const feetToMeter = 0.3048;

const literToGallon = 0.264;
const gallonToLiter = 3.78541;

const kiloToPound = 2.204;
const poundToKilo = 0.453592;

convertBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;
  lengthEl.textContent = `${baseValue} meters = ${(
    baseValue * meterToFeet
  ).toFixed(5)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(
    5
  )} meters`;
});

convertBtn.addEventListener("click", function () {
  let literValue = inputEl.value;
  lengthElLiters.textContent = `${literValue} liters = ${(
    literValue * literToGallon
  ).toFixed(5)} gallons | ${literValue} gallons = ${(
    literValue * gallonToLiter
  ).toFixed(5)} liters`;
});

convertBtn.addEventListener("click", function () {
  let massValue = inputEl.value;
  lengthElMass.textContent = `${massValue} kilos = ${(
    massValue * kiloToPound
  ).toFixed(5)} pounds | ${massValue} pounds = ${(
    massValue * poundToKilo
  ).toFixed(5)} kilos`;
});
