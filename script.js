const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const text = document.querySelector("textarea");
const done = document.querySelector(".message2");
const messages = document.querySelectorAll("p");
const button = document.querySelector("button");

button.addEventListener("click", function (event) {
    event.preventDefault();

    // Reset error messages display
    messages.forEach(message => {
        message.style.display = "none";
    });

    let formIsValid = true;

    // Check each field and show corresponding error message if needed
    if (firstName.value === "") {
        firstName.nextElementSibling.style.display = "block";
        formIsValid = false;
    }

    if (lastName.value === "") {
        lastName.nextElementSibling.style.display = "block";
        formIsValid = false;
    }

    if (email.value === "") {
        email.nextElementSibling.style.display = "block";
        formIsValid = false;
    }

    if (text.value === "") {
        text.nextElementSibling.style.display = "block";
        formIsValid = false;
    }

    // If all fields are filled out, show the success message
    if (formIsValid) {
        done.style.visibility = "visible";
    }
});
