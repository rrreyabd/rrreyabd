// Raihan
let regexInputRaihan = document.querySelector("#regexInputRaihan")
let validationTextRaihan = document.querySelector("#validation-text-raihan")

// Digunakan untuk memvalidasi input yang dimulai dengan angka
const REGULAR_EXPRESSION = new RegExp("^\\d");
// Penu
// Atau
// const REGULAR_EXPRESSION = /^\d/;

regexInputRaihan.addEventListener("input", function() {
    validationTextRaihan.innerHTML = REGULAR_EXPRESSION.test(regexInputRaihan.value) 
    ? "<p class='text-green-600'>Valid</p>" : "<p class='text-red-600'>Invalid</p>"
})