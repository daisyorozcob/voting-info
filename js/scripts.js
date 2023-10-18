function checkAge() {
    var age = document.getElementById("ageInput").value;

    if (age < 18) {
        document.getElementById("result").innerHTML =
            "Sorry, you are too young to vote. "
    } else {
        document.getElementById("result").innerHTML =
            "Congratulations! You are old enough to vote. "
    }
}
