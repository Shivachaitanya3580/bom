localStorage.setItem('username', 'user123');
localStorage.setItem('password', 'password123');

function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    
    errorMessage.textContent = '';
    successMessage.textContent = '';

      if (usernameInput === storedUsername && passwordInput === storedPassword) {
        successMessage.textContent = 'Login successful!';
        errorMessage.textContent = '';  
    } else {
        errorMessage.textContent = 'Invalid username or password!';
        successMessage.textContent = ''; 
    }
}