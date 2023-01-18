console.log("running");

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

const errorMessage = document.getElementById("error-message");



confirmPasswordInput.addEventListener("input", function() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordInput.classList.add("error");
        confirmPasswordInput.classList.add("error");

        errorMessage.textContent="Passwords don't match!";
    } else {
        passwordInput.classList.remove("error");
        confirmPasswordInput.classList.remove("error");

        errorMessage.textContent=" ";
    }
});

passwordInput.addEventListener("input", function() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordInput.classList.add("error");
        confirmPasswordInput.classList.add("error");

        errorMessage.textContent="Passwords don't match!";
    } else {
        passwordInput.classList.remove("error");
        confirmPasswordInput.classList.remove("error");

        errorMessage.textContent=" ";
    }
});