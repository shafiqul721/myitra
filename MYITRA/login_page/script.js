// 1️⃣ Check if Supabase sent a confirmation token in the URL
const hashToken = window.location.hash.replace("#token=", "");

if (hashToken) {
    console.log("Email confirmation token:", hashToken);

    // Complete the email confirmation
    supabase.auth.verifyOtp({
        token_hash: hashToken,
        type: "signup"
    })
    .then(({ data, error }) => {
        if (error) {
            console.error("Confirmation error:", error.message);
            alert("Invalid or expired confirmation link.");
        } else {
            console.log("Email confirmed:", data);
            alert("Your email is confirmed! You can now log in.");
        }
    });
}


// 2️⃣ Normal Login Form
document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Login using Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        alert("Login failed: " + error.message);
        console.error(error);
        return;
    }

    alert("Logged in successfully!");
    console.log("Session:", data);

    // Redirect to home page after login (customize this)
    window.location.href = "../home_page/index.html";
});

