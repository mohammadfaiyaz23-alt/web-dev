// const { useInsertionEffect } = require("react");

let choices = document.querySelectorAll(".choice");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissor");
let userScore = document.querySelector(".user-score");
let compScore = document.querySelector(".comp-score");
let button = document.querySelector(".btn");
let msg = document.querySelector(".text");
let user = document.querySelector(".left-msg")
let computer = document.querySelector(".right-msg")
let mid = document.querySelector(".middle")
let uScore = 0;
let cScore = 0;
const gencompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return option[index];
}
const showWinner = (userWinn) => {
    if (userWinn) {
        msg.innerText = "YOU WON"
        mid.style.backgroundColor = "green";
        msg.style.backgroundColor = "green";

    } else {
        msg.innerText = "YOU LOST"
        mid.style.backgroundColor = "red";
        msg.style.backgroundColor = "red";
    }
}
const playGame = (ueserChoice, compChoice) => {
    user.innerText = `${ueserChoice}`
    computer.innerText = `${compChoice}`
    if (ueserChoice === compChoice) {
        msg.innerText = "IT IS DRAW!!"
        mid.style.backgroundColor = "red"
        msg.style.backgroundColor = "green";
    } else {
        let userWinn = true;
        if (ueserChoice === "rock") {
            userWinn = compChoice === "paper" ? false : true;
        } else if (ueserChoice === "paper") {
            userWinn = compChoice === "rock" ? true : false;

        } else if (ueserChoice === "scissors") {
            userWinn = compChoice === "rock" ? false : true;
        }
        showWinner(userWinn);
        score(userWinn);
    }
}
const score = (userWinn) => {
    if (userWinn) {
        uScore++;
        userScore.innerText = uScore;
    } else {
        cScore++;
        compScore.innerText = cScore;
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const ueserChoice = choice.getAttribute("id")
        const compChoice = gencompChoice()
        playGame(ueserChoice, compChoice)
    })
})
const newGame = () => {
    uScore = 0;
    cScore = 0;
    msg.innerText = "";
    msg.innerText = "";
    user.innerText = "";
    computer.innerText = "";
    userScore.innerText = 0;
    compScore.innerText = 0;
    mid.style.backgroundColor = ""
}
button.addEventListener("click", newGame)