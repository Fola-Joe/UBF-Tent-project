const moveToSignUpPage = document.querySelector('#sign-up-page');
const moveToSignInPage = document.querySelector('#sign-in-page');
const signUpPage = document.querySelector('.main-2');
const signInPage = document.querySelector('.main');

moveToSignInPage.addEventListener('click', () => {
    signUpPage.style.display = 'none'
    signInPage.style.display = 'block';
})
moveToSignUpPage.addEventListener('click', () => {
    signUpPage.style.display = 'block'
    signInPage.style.display = 'none';
})