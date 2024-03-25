'use strict'

var answers = [];

function userInformation() {
    var promptNameResult = prompt("Enter your name")
    if (promptNameResult) {

        var promptGenderResult = prompt("Enter your gender").toLowerCase();

        if (promptGenderResult != "male" && promptGenderResult != "female") {
            alert("Please enter valid gender");
            promptGenderResult = "none";
        }

        var promptAgeResult = prompt("Enter your age")
        if (promptAgeResult <= 0) {
            alert("Not valid!");
        } else {
            var skipMsg = confirm("Do you want to skip the welcoming message?");
            let welcome;
            if (!skipMsg) {
                if (promptGenderResult === "male") {
                    welcome = "Welcome Mr. " + promptNameResult + "!";
                } else if (promptGenderResult === "female") {
                    welcome = "Welcome Ms. " + promptNameResult + "!";
                } else if (promptGenderResult === "none") {
                    welcome = "Welcome " + promptNameResult + "!";
                }
                alert(welcome);
            }
        }
    } else {
    }
}

function yesOrNoQustions() {
    let questions = ["Q1 : Do you love coding? Yes or No", "Q2 : Do you think it's easy? Yes or No", "Q3 : Do you want to be pro? Yes or no"];
    let result;
    for (let questionArrayValue = 0; questionArrayValue < questions.length; questionArrayValue++) {
        result = prompt(questions[questionArrayValue]);
        while (result == "") {
            if (!result) {
                alert("Not valid!");
            }
            result = prompt(questions[questionArrayValue]);
        }
        answers.push(result);
    }
    return answers
}

function answersResult() {
    for (let x = 0; x < answers.length; x++) {
        console.log("The answers are : " + answers)
    }
}
userInformation();
yesOrNoQustions();
answersResult();