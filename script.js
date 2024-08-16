const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const text = document.querySelector("textarea");
const done = document.querySelector(".message2")
const messages = document.querySelectorAll("p");
const button = document.querySelector("button");

button.addEventListener("click", function (event) {
    event.preventDefault();
    if (firstName.value === "" || lastName.value === "" || email.value === "" || text.value === "") {
        messages.forEach(message => {
            message.style.display = "block";
        });
    } else {
        done.style.visibility = "visibile"; 
    }
});
