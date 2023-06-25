document.getElementById("submitButton").addEventListener("click", () => {
    const emailValue = document.getElementById("emailInput").value;
    const passwordValue = document.getElementById("passwordInput").value;

    if (emailValue === "admin" && passwordValue === "admin") {
        window.location.href = "admin.html";
    }
    else {
        alert("Invalid credentials");
    }
})