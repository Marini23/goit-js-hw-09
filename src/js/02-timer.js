import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector(`#datetime-picker`);
const btnStart = document.querySelector(`[data-start]`);
const  daysRemaining = document.querySelector('[data-days]');
const hoursRemaining = document.querySelector('[data-hours]');
const minutesRemaining = document.querySelector('[data-minutes]');
const secondsRemaining = document.querySelector('[data-seconds]');
let selectedDate = null;
let currentDate = null;
let intervalId = null;
let remainingTime = 0;
btnStart.disabled = true;

btnStart.addEventListener(`click`, timerStart);

function timerStart() {

};

const options = {
enableTime: true,
time_24hr: true,
defaultDate: new Date(),
minuteIncrement: 1,
onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    currentDate = new Date().getTime();
    btnStart.disabled = true;
    if (selectedDate > currentDate) {
    btnStart.disabled = false;
    }
    else {
        return window.alert(`Please choose a date in the future`);
    }
    },
};

const fp = flatpickr(input, options);



function timerStart() {
intervalId = setInterval(() => {
    currentDate = new Date().getTime();
    if (selectedDate - currentDate <= 1000) {
        clearInterval(intervalId);
        btnStart.disabled = true;
        input.disabled = false;
        return;
    } else {
        btnStart.disabled = true;
        input.disabled = true;
        currentDate += 1000;
        remainingTime = Math.floor(selectedDate - currentDate);
        convertMs(remainingTime);
    }
    }, 1000);
}
function createMarkup({ days, hours, minutes, seconds }) {
    daysRemaining.textContent = days;
    hoursRemaining.textContent = hours;
    minutesRemaining.textContent = minutes;
    secondsRemaining.textContent = seconds;
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
    );
    createMarkup({ days, hours, minutes, seconds });
    return { days, hours, minutes, seconds };
}