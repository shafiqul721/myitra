// Keep your form code exactly as it is.
document.getElementById('signup-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log('Sign Up:', { name, email, password });

  // ===========================
  // TRY TO SEND EMAIL
  // ===========================
  const emailSent = await sendConfirmation(email, name);

  if (emailSent) {
    alert("Account created successfully! A confirmation email was sent.");
  } else {
    alert("Account created, but email sending failed.");
  }
});

// ===========================
// EMAIL SENDING FUNCTION
// ===========================
async function sendConfirmation(toEmail, name) {
  try {
    const html = `
      <h2>Welcome to MYITRA, ${name}!</h2>
      <p>Thank you for signing up!</p>
      <p><a href="https://myitra.vercel.app/login_page/login.html">Click here to login</a></p>
    `;

    const resp = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: toEmail,
        subject: "Welcome to MYITRA!",
        html
      })
    });

    const data = await resp.json();

    if (!resp.ok) {
      console.error("Email sending error:", data);
      return false;
    }

    console.log("Email sent:", data);
    return true;

  } catch (err) {
    console.error("Failed to send email:", err);
    return false;
  }
}
