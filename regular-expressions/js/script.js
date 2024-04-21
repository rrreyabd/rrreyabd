let regexInput1 = document.querySelector("#regexInput1")
let regexInput2 = document.querySelector("#regexInput2");
let regexInput3 = document.querySelector("#regexInput3");
let regexInput4 = document.querySelector("#regexInput4");
let regexInput5 = document.querySelector("#regexInput5");

let validationText1 = document.querySelector("#validation-text-1")
let validationText2 = document.querySelector("#validation-text-2");
let validationText3 = document.querySelector("#validation-text-3");
let validationText4 = document.querySelector("#validation-text-4");
let validationText5 = document.querySelector("#validation-text-5");



// Validasi input yang dimulai dengan angka
const REGULAR_EXPRESSION = new RegExp("^\\d");

// Validasi URL
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

// Validasi email
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validasi huruf kapital
const CAPITAL_LETTER_REGEX = /[A-Z]/;

// Validasi tidak boleh ada karakter yang sama
const NO_DUPLICATE_CHARACTERS_REGEX = /^(?!.*(.).*\1).*$/;



regexInput1.addEventListener("input", function() {
    validationText1.innerHTML = REGULAR_EXPRESSION.test(regexInput1.value) 
    ? "<p class='text-green-600'>Valid</p>" : "<p class='text-red-600'>Invalid</p>"
})

regexInput2.addEventListener("input", function() {
    validationText2.innerHTML = URL_REGEX.test(regexInput2.value) 
    ? "<p class='text-green-600'>Valid</p>" : "<p class='text-red-600'>Invalid</p>";
});

regexInput3.addEventListener("input", function() {
    validationText3.innerHTML = EMAIL_REGEX.test(regexInput3.value) 
    ? "<p class='text-green-600'>Valid</p>" : "<p class='text-red-600'>Invalid</p>";
});

regexInput4.addEventListener("input", function() {
    validationText4.innerHTML = CAPITAL_LETTER_REGEX.test(regexInput4.value) 
    ? "<p class='text-green-600'>Valid</p>" : "<p class='text-red-600'>Invalid</p>";
});

regexInput5.addEventListener("input", function() {
    validationText5.innerHTML = NO_DUPLICATE_CHARACTERS_REGEX.test(regexInput5.value) 
    ? "<p class='text-green-600'>Valid</p>" : "<p class='text-red-600'>Invalid</p>";
});
