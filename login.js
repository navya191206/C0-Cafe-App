document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // Dummy credentials (you can expand this with real validation or server-side logic)
  if (username === "latteuser" && password === "coffee123") {
    window.location.href = "order.html"; // Redirect to your order form page
  } else {
    errorMsg.textContent = "Invalid username or password!";
  }
});