console.log("running");

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

console.log(confirmPasswordInput);

confirmPasswordInput.addEventListener("input", function() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordInput.classList.add("error");
        confirmPasswordInput.classList.add("error");
    } else {
        passwordInput.classList.remove("error");
        confirmPasswordInput.classList.remove("error");
    }

    console.log("done");
});