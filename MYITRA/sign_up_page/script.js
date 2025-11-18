document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log('Sign Up:', { name, email, password });
  alert('Account created successfully!');
});