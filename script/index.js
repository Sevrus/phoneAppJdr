const allDigitsNumbers = document.querySelectorAll('.main-pin__digits__digit--number');
const backspace = document.querySelector('.main-pin__digits__back');
const okButton = document.querySelector('.main-pin__digits__ok');
const enterPinInput = document.querySelector('#enter-pin');
const title = document.querySelector('.main-pin__title');
const instructions = document.querySelector('.main-pin__instructions');

const pin = '25421';
const maxAttempt = 5;
let attempt = 0;

allDigitsNumbers.forEach((digit) => {
    digit.addEventListener('click', () => {
        title.style.display = 'none';
        enterPinInput.style.display = 'block';
        const digitValue = digit.textContent;
        enterPinInput.value += digitValue;
        console.log(enterPinInput.value);
    });
});

backspace.addEventListener('click', () => {
    enterPinInput.value = enterPinInput.value.slice(0, -1);
});

okButton.addEventListener('click', () => {
    if(enterPinInput.value === pin) {
        window.location.href = 'principalScreen.html';
    } else {
        attempt++;
        if(attempt >= maxAttempt) {
            window.location.href = 'errorScreen.html';
        } else {
            instructions.textContent = `Il vous reste ${maxAttempt - attempt} tentative${maxAttempt - attempt > 1 ? 's' : ''}`
            enterPinInput.value = '';
        }
    }
});
