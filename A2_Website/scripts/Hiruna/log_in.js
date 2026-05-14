// Hiruna, rana0302
// Log In JS
// Version 1.0.0

if (localStorage.getItem('userName')) {
    window.location.href = 'profile_page.html';
}

function signup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm-password').value;
    const error = document.getElementById('error-message');
  
    if (name === '' || email === '' || password === '' || confirm === '') {
      error.textContent = 'Please fill in all fields.';
      return;
    }
  
    if (password !== confirm) {
      error.textContent = 'Passwords do not match.';
      return;
    }
  
    if (!email.includes('@')) {
        error.textContent = 'Please enter a valid email address.';
        return;
      }
   
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    window.location.href = 'profile_page.html';
  }