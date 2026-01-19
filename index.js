function greet() {
    let name = prompt("What is your name?");
    alert("Hello, " + name);
    let age = parseInt(prompt("How old are you?"));
    let birthday = confirm("Please click OK if you have had your birthday this year. Click Cancel if you have not.")
    if (birthday === true) { 
            alert("You were born in the year " + (new Date().getFullYear() - age))
    }
    else {
        alert("You were born in the year "+ (new Date().getFullYear() - age - 1))
    }
}