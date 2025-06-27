const wrapper = document.querySelector('.wrapper');
const loginForm = document.querySelector('.form-box.login');
const registerForm = document.querySelector('.form-box.register');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

btnPopup.onclick = () => {
    wrapper.classList.add('active-popup');
};
iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
};

registerLink.onclick = (e) => {
    e.preventDefault();
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
};

loginLink.onclick = (e) => {
    e.preventDefault();
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
};    
