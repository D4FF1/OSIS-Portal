// LOGIN
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const role = document.getElementById("role").value;

    // Simpan ke localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("role", role);

    // Redirect berdasarkan role
    if (role === "admin") {
        window.location.href = "admin-dashboard.html";
    } else {
        window.location.href = "portal-siswa.html";
    }
});

// CEK ROLE DI HALAMAN ADMIN
function protectAdmin() {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
        alert("Akses Ditolak!");
        window.location.href = "login.html";
    }
}

// CEK ROLE DI HALAMAN USER
function protectUser() {
    const role = localStorage.getItem("role");
    if (role !== "user") {
        alert("Akses Ditolak!");
        window.location.href = "login.html";
    }
}
