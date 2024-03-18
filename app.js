var promptNameResult = prompt("Enter your name")

var promptGenderResult = prompt("Enter your gender")

var promptAgeResult = prompt("Enter your age")
if (promptAgeResult <= 0) {
    var promptAgeResult = prompt("Enter valid age");
} else if (isNaN(promptAgeResult)) {
    var promptAgeResult = prompt("Enter a valid age");
}

switch (promptGenderResult) {
    case "male":
        var confirmResult = confirm("Mr. " + promptNameResult);
        break;
    case "female":
        var confirmResult = confirm("Ms. " + promptNameResult);
        break;
    default:
        // alert("Please enter valid gender");
        // var promptGenderResult = prompt("Enter your gender");
        var confirmResult = confirm("");
        break;
}
