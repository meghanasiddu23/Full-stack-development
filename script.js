document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let isValid = true;

    const username = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    const usernamePattern = /^[A-Za-z]+$/;

    if (!usernamePattern.test(username.value)) {
        isValid = false;
        usernameError.textContent = 'Only letters are allowed';
        username.style.borderColor = 'red';
    } else {
        usernameError.textContent = '';
        username.style.borderColor = '#ccc';
    }

    if (!isValid) {
        event.preventDefault();
    }
});
