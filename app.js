var promptNameResult = prompt("Enter your name")
if (promptNameResult) {

    var promptGenderResult = prompt("Enter your gender").toLocaleLowerCase();

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