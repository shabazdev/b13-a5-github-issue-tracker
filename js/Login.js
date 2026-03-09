const userName = 'admin';
const password = 'admin123';

getEliment('username').innerText = userName;
getEliment('password').innerText = password;

const loginForm = getEliment('loginForm');

const usernameInput = getEliment('usernameInput');
const passwordInput = getEliment('passwordInput');
const showPassword = getEliment('showPassword');

showPassword.addEventListener('click', () => {
    const icon = showPassword.querySelector('i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        icon.classList.add('fa-eye');
        icon.classList.remove('fa-eye-slash');
        passwordInput.type = 'password';
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userNameMatched = removeSpace(usernameInput.value) === userName;
    const passwordMatched = removeSpace(passwordInput.value) === password;

    const isMatched = userNameMatched && passwordMatched;

    usernameInput.classList.toggle('input-error', !userNameMatched);
    passwordInput.classList.toggle('input-error', !passwordMatched);

    if (isMatched) {
        window.location.href = './pages/home.html';
    } else {
        alert('Invalid Cradentials!');
    }
});
