document.addEventListener("DOMContentLoaded", function () {

    // Тіркелу функциясы
    const registerBtn = document.getElementById("register-btn");
    if (registerBtn) {
        registerBtn.addEventListener("click", function () {
            const email = document.getElementById("register-email").value;
            const password = document.getElementById("register-password").value;

            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    alert("Тіркелу сәтті аяқталды!");
                    window.location.href = "dashboard_student.html"; // Тіркелгеннен кейін басты бетке бағыттау
                })
                .catch((error) => {
                    alert("Қате: " + error.message);
                });
        });
    }

    // Кіру функциясы
    const loginBtn = document.getElementById("login-btn");
    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    alert("Кіру сәтті!");
                    window.location.href = "dashboard_student.html"; // Кіру сәтті болса, басты бетке бағыттау
                })
                .catch((error) => {
                    alert("Қате: " + error.message);
                });
        });
    }
});
