// document.getElementById("dropform").addEventListener("submit", function(e) {
//     e.preventDefault();
//     const username = document.getElementById("username").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password").value.trim();
//     const errorMsg = document.getElementById("error");
//     errorMsg.textContent = "Drop ไปไหนก่อน";

//     if(username === ""){
//         errorMsg.textContent = "กรุณากรอกชื่อผู้ใช้";
//         return;
//     }

// })

document.addEventListener("DOMContentLoaded", () =>  {
    const form = document.getElementById("dropform");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const usernameFeedback = document.getElementById("username-feedback");
    const emailFeedback = document.getElementById("email-feedback");
    const passwordFeedback = document.getElementById("password-feedback");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        usernameInput.classList.remove("is-invalid");
        emailInput.classList.remove("is-invalid");
        passwordInput.classList.remove("is-invalid");
        usernameFeedback.textContent = "";
        emailFeedback.textContent = "";
        passwordFeedback.textContent = "";

        if (usernameInput.value.trim() === "") {
            usernameInput.classList.add("is-invalid");
            usernameFeedback.textContent = "กรุณากรอกชื่อผู้ใช้";
        }
        if (emailInput.value.trim() === "") {
            emailInput.classList.add("is-invalid");
            emailFeedback.textContent = "กรุณากรอกอีเมล";
        }
        if (passwordInput.value.trim() === "") {
            passwordInput.classList.add("is-invalid");
            passwordFeedback.textContent = "กรุณากรอกรหัสผ่าน";
        }

    });
});
