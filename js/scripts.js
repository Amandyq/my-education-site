document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logout");

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            alert("Сіз жүйеден шықтыңыз!");
            window.location.href = "login.html";
        });
    }
});
