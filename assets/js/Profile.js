import {toast} from "../../src/component/Toast/toast.js";
const name =document.querySelector(".name")
const nationalCode = document.querySelector(".national-code")
const phoneNumber = document.querySelector(".phone-number")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
const repeatedPassword = document.querySelector(".repeated-password")
const saveBtn = document.querySelector(".save-btn")
const cancelBtn = document.querySelector(".cancel-btn")
function toEnglishDigits(str) {
    const persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"]
    const englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

    return str.split("").map(c => englishNumbers[persianNumbers.indexOf(c)]|| c).join("")
}
saveBtn.addEventListener("click", function(event) {

})
