const moveToSignUpPage = document.querySelector('#sign-up-page');
const moveToSignInPage = document.querySelector('#sign-in-page');

const signUpPage = document.querySelector('.main-2');
const signInPage = document.querySelector('.main');

const signUpBtn = document.querySelector('.login-btn-2');
const signInBtn = document.querySelector('.login-btn');

const form1 = document.querySelector('.sign-in-form');
const form2 = document.querySelector('.sign-in-form-2');

//moving from sign in page to sign up page
moveToSignInPage.addEventListener('click', () => {
    signUpPage.style.display = 'none'
    signInPage.style.display = 'block';
})
moveToSignUpPage.addEventListener('click', () => {
    signUpPage.style.display = 'block'
    signInPage.style.display = 'none';
})


//Sign in page
const emailInput = document.querySelector('.email-input');
const emailErrorMsg = document.querySelector('.email-error');

const passwordInput = document.querySelector('.password-input');
const passwordErrorMsg = document.querySelector('.password-error');

form1.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!emailInput.value) {
        emailErrorMsg.style.display = 'block';
        emailInput.style.borderColor = 'red';
    } else {
        emailErrorMsg.style.display = 'none';
        emailInput.style.borderColor = '';
    }
    if (!passwordInput.value) {
        passwordErrorMsg.style.display = 'block';
        passwordInput.style.borderColor = 'red';
    }  else {
        passwordErrorMsg.style.display = 'none';
        passwordInput.style.borderColor = '';
    }
    if (emailInput.value && passwordInput.value){
        emailInput.value = '';
        passwordInput.value = '';
    }
})


//Sign up page
const firstnameInput = document.querySelector('.first-name-2');
const firstnameErrorMsg = document.querySelector('.first-name-error');

const lastnameInput = document.querySelector('.last-name-2');
const lastnameErrorMsg = document.querySelector('.last-name-error');

const passwordInput2 = document.querySelector('.password-input-2');
const passwordErrorMsg2 = document.querySelector('.password-error-2');

const emailInput2 = document.querySelector('.email-input-2');
const emailErrorMsg2 = document.querySelector('.email-error-2');

//restricting user from inputting numeric characters for names
firstnameInput.addEventListener('input', (e) => {
    const input = e.target.value;
    // Remove all non-letter characters
    const lettersOnly = input.replace(/[^a-zA-Z\s]/g, '');
    e.target.value = lettersOnly;
})
lastnameInput.addEventListener('input', (e) => {
    const input = e.target.value;
    // Remove all non-letter characters
    const lettersOnly = input.replace(/[^a-zA-Z\s]/g, '');
    e.target.value = lettersOnly;
})


form2.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!firstnameInput.value) {
        firstnameErrorMsg.style.display = 'block';
        firstnameInput.style.borderColor = 'red';
    }  else {
        firstnameErrorMsg.style.display = 'none';
        firstnameInput.style.borderColor = '';
    }
    if (!lastnameInput.value) {
        lastnameErrorMsg.style.display = 'block';
        lastnameInput.style.borderColor = 'red';
    }  else {
        lastnameErrorMsg.style.display = 'none';
        lastnameInput.style.borderColor = '';
    }
    if (!emailInput2.value) {
        emailErrorMsg2.style.display = 'block';
        emailInput2.style.borderColor = 'red';
    } else {
        emailErrorMsg2.style.display = 'none';
        emailInput2.style.borderColor = '';
    }
    if (!passwordInput2.value) {
        passwordErrorMsg2.style.display = 'block';
        passwordInput2.style.borderColor = 'red';
    } else {
        passwordErrorMsg2.style.display = 'none';
        passwordInput2.style.borderColor = '';
    }
    if (firstnameInput.value && lastnameInput.value && emailInput2.value && passwordInput2.value) {
        firstnameInput.value = '';
        lastnameInput.value = '';
        emailInput2.value = '';
        passwordInput2.value = '';
    }
})


//to be removed soon
const home = document.querySelector('.home');
home.addEventListener('click', (e) => {
    e.preventDefault();
    const url = e.target.getAttribute('href');
    window.location.href = url;
})
//