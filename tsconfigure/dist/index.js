"use strict";
// const number1 = document.querySelector(".input1") as HTMLInputElement;
// const number2 = document.querySelector(".input2") as HTMLInputElement;
// const addButton = document.querySelector("button");
// const result = document.querySelector("p") as HTMLParagraphElement;
// addButton?.addEventListener("click", () => {
//         const sum = Number(number1.value) + Number(number2.value);
//         result.textContent = `The result is ${sum}`
// })
const form = document.querySelector(".user-form");
console.log(form);
const userNameInput = document.querySelector("#username");
console.log(userNameInput);
const userEmailInput = document.querySelector("#useremail");
const userCountry = document.querySelector("#country");
console.log(userCountry);
const userFeedback = document.querySelector("#feedback");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let userData = {
        userName: userNameInput.value,
        userEmail: userEmailInput.value,
        userCountry: userCountry.value,
        userFeedback: userFeedback.value
    };
    console.log(userData);
});
